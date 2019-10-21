import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script/script.service';
import { CmsService } from 'src/app/services/cms/cms.service';
import { LiveFeedPage } from 'src/app/models/LiveFeedPage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {

  public pages: LiveFeedPage[];
  public imageEndpoint: string;

  constructor(
    scriptService: ScriptService,
    private cmsService: CmsService) {
    scriptService.loadAll();

    this.imageEndpoint = environment.CMSEndpoint;
  }

  ngOnInit() {
    this.cmsService.getLiveFeedPages().subscribe(pages => { this.pages = pages; console.log(this.pages);});
  }
}
