import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms/cms.service';
import { AboutUsPage } from 'src/app/models/AboutUsPage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  private aboutUs: AboutUsPage;
  public imageEndpoint: string;

  constructor(private cmsService: CmsService) {
    this.imageEndpoint = environment.CMSEndpoint;
  }

  ngOnInit() {
    this.cmsService.getAboutUsPages().subscribe(x => this.aboutUs = x[0]);
  }
}
