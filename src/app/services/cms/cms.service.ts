import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageBlock } from 'src/app/models/PageBlock';
import { environment } from 'src/environments/environment';
import { LiveFeedPage } from 'src/app/models/LiveFeedPage';
import { HeaderSliderPages } from 'src/app/models/HeaderSliderPages';
import { SiteConfiguration } from 'src/app/models/SiteConfiguration';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }

  public getLiveFeedPages(): Observable<LiveFeedPage[]> {
    const apiUrl = `${environment.CMSEndpoint}livefeedpages`;
    return this.http.get<LiveFeedPage[]>(apiUrl);
  }

  public getSliderPages(): Observable<HeaderSliderPages[]> {
    const apiUrl = `${environment.CMSEndpoint}headersliderpages`;
    return this.http.get<HeaderSliderPages[]>(apiUrl);
  }

  public getSiteconfiguration(): Observable<SiteConfiguration[]> {
    const apiUrl = `${environment.CMSEndpoint}siteconfigurations`;
    return this.http.get<SiteConfiguration[]>(apiUrl);
  }
}
