import { Component, OnInit } from "@angular/core";
import { ScriptService } from "src/app/services/script/script.service";
import { forkJoin, concat } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: "app-live-feed",
  templateUrl: "./live-feed.component.html",
  styleUrls: ["./live-feed.component.css"]
})
export class LiveFeedComponent implements OnInit {
  constructor(private script: ScriptService) {
    const scripts = ["slick", "custom"];
    script.loadInSequence(scripts);
  }

  ngOnInit() {}
}
