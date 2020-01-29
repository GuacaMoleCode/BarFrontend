import { Component, OnInit, Input } from '@angular/core';
import { CmsService } from 'src/app/services/cms/cms.service';
import { SiteConfiguration } from 'src/app/models/SiteConfiguration';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input() showNavigation = true;

  public config: SiteConfiguration;

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    this.cmsService.getSiteconfiguration().subscribe(config =>
      this.config = config.filter(x => x.Configuratie_Beschrijving === 'Default')[0]);
  }

}
