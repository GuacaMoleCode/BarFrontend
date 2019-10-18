import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageBlock } from 'src/app/models/PageBlock';
import { environment } from 'src/environments/environment';
import { LiveFeedPage } from 'src/app/models/LiveFeedPage';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }

  public getPageBlocks(): Observable<PageBlock[]> {
    const apiUrl = `${environment.CMSEndpoint}pageBlocks`;
    return this.http.get<PageBlock[]>(apiUrl);
  }

  public getLiveFeedPages(): Observable<LiveFeedPage[]> {
    const apiUrl = `${environment.CMSEndpoint}livefeedpages`;
    return this.http.get<LiveFeedPage[]>(apiUrl);
  }
}
