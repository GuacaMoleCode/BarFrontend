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

  public getLiveFeedPages(): Observable<LiveFeedPage[]> {
    const apiUrl = `${environment.CMSEndpoint}livefeedpages`;
    return this.http.get<LiveFeedPage[]>(apiUrl);
  }

  public getSliderPages(): Observable<object> {
    const apiUrl = `${environment.CMSEndpoint}sliders`;
    return this.http.get(apiUrl);
  }
}
