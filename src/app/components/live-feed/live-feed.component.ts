import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script/script.service';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {
  constructor(scriptService: ScriptService) {
    const scripts = ['slick', 'custom'];
    scriptService.loadInSequence(scripts);
  }

  ngOnInit() {}
}
