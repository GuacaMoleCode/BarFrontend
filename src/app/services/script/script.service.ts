import { Injectable } from '@angular/core';
import { Observable, Observer, concat } from 'rxjs';
import { Script, ScriptStore } from 'src/app/stores/script/script.store';

declare var document: any;

@Injectable()
export class ScriptService {
  private scripts: Script[] = [];

  public loadAll() {
    concat(...this.load(ScriptStore.map(x => x.name))).subscribe(x => console.log(`next loading: ${x.name}`));
  }

  public loadInSequence(scriptNames: string[]) {
    concat(...this.load(scriptNames)).subscribe(x => console.log(`next loading: ${x.name}`));
  }

  private load(scriptNames: string[]): Observable<Script>[] {
    return scriptNames.map(scriptName => {
      return new Observable<Script>((observer: Observer<Script>) => this.loadScript(scriptName, observer));
    });
  }

  private loadScript(scriptName: string, observer: Observer<Script>) {
    const existingScript = ScriptStore.find(s => s.name === scriptName);

    // Complete if already loaded
    if (existingScript && existingScript.loaded) {
      observer.next(existingScript);
      observer.complete();
    } else {
      // Add the script
      this.scripts = [...this.scripts, existingScript];

      // Load the script
      const scriptElement = document.createElement('script');
      scriptElement.type = existingScript.srcType;
      scriptElement.src = existingScript.src;

      scriptElement.onload = () => {
        existingScript.loaded = true;
        observer.next(existingScript);
        observer.complete();
      };

      scriptElement.onerror = (error: any) => {
        observer.error('Couldn\'t load script ' + existingScript.src);
      };

      document.getElementsByTagName('body')[0].appendChild(scriptElement);
    }
  }
}
