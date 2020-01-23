import { Component, OnInit } from '@angular/core';
import { HeaderSliderPages } from 'src/app/models/HeaderSliderPages';
import { CmsService } from 'src/app/services/cms/cms.service';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.css']
})
export class SliderBlockComponent implements OnInit {

  public pages: HeaderSliderPages[];
  public imageEndpoint: string;

  constructor(private cmsService: CmsService) {
    this.imageEndpoint = environment.CMSEndpoint;
  }

  ngOnInit() {
    this.cmsService.getSliderPages().subscribe(pages => { this.pages = pages.filter(x => x.Zichtbaar); console.log(this.pages); });
  }

}
