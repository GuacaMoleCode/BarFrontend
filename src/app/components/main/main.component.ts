import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script/script.service';
import { CmsService } from 'src/app/services/cms/cms.service';
import { SiteConfiguration } from 'src/app/models/SiteConfiguration';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public config: SiteConfiguration;

  constructor(
    scriptService: ScriptService,
    private cmsService: CmsService) {
    scriptService.loadAll();
  }

  ngOnInit() {
    this.cmsService.getSiteconfiguration().subscribe(config =>
      this.config = config.filter(x => x.Configuratie_Beschrijving === 'Default')[0]);
  }
}
