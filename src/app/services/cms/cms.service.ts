import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageBlock } from 'src/app/models/PageBlock';
import { environment } from 'src/environments/environment';
import { LiveFeedPage } from 'src/app/models/LiveFeedPage';
import { HeaderSliderPage } from 'src/app/models/HeaderSliderPages';
import { SiteConfiguration } from 'src/app/models/SiteConfiguration';
import { AboutUsPage } from 'src/app/models/AboutUsPage';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http: HttpClient) { }

  public getLiveFeedPages(): Observable<LiveFeedPage[]> {
    const apiUrl = `${environment.CMSEndpoint}livefeedpages`;
    return this.http.get<LiveFeedPage[]>(apiUrl);
  }

  public getSliderPages(): Observable<HeaderSliderPage[]> {
    const apiUrl = `${environment.CMSEndpoint}headersliderpages`;
    return this.http.get<HeaderSliderPage[]>(apiUrl);
  }

  public getSiteconfiguration(): Observable<SiteConfiguration[]> {
    const apiUrl = `${environment.CMSEndpoint}siteconfigurations`;
    return this.http.get<SiteConfiguration[]>(apiUrl);
  }

  public getAboutUsPages(): Observable<AboutUsPage[]> {
    const apiUrl = `${environment.CMSEndpoint}overons`;
    return this.http.get<AboutUsPage[]>(apiUrl);
  }
}
