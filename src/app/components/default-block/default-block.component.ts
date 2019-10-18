import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-default-block',
  templateUrl: './default-block.component.html',
  styleUrls: ['./default-block.component.css']
})
export class DefaultBlockComponent implements OnInit {

  @Input() subTitle: string;
  @Input() title: string;

  @Input() leftHtml: string;
  @Input() rightHtml: string;

  pageTitle = 'Default title';
  pageSubTitle = 'Default subtitle';

  pageLeftHtml: SafeHtml;
  pageRightHtml: SafeHtml;

  constructor(private Sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.pageTitle = this.title;
    this.pageSubTitle = this.subTitle;

    this.pageLeftHtml = this.Sanitizer.bypassSecurityTrustHtml(this.leftHtml);
    this.pageRightHtml = this.Sanitizer.bypassSecurityTrustHtml(this.rightHtml);

  }

}
