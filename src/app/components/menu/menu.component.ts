import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms/cms.service';
import { SiteConfiguration } from 'src/app/models/SiteConfiguration';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
