import { Component, OnInit } from '@angular/core';
import { PageBlocksService } from './services/pageBlocks/page-blocks.service';
import { PageBlock } from './models/PageBlock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private pageBlocksService: PageBlocksService) { }

  private pageBlocks: PageBlock[];

  title = 'BarFrontend';

  // tslint:disable-next-line: use-lifecycle-interface
  async ngOnInit() {
    this.pageBlocksService.getPageBlocks().subscribe(pageBlocks => this.pageBlocks = pageBlocks);
  }
}
