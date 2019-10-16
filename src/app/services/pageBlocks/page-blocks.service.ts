import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageBlock } from 'src/app/models/PageBlock';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PageBlocksService {

  private readonly postEndpoint = 'pageblocks';

  constructor(private http: HttpClient) { }

  public getPageBlocks(): Observable<PageBlock[]> {
    const apiUrl = `${environment.CMSEndpoint}${this.postEndpoint}`;
    return this.http.get<PageBlock[]>(apiUrl);
  }
}
