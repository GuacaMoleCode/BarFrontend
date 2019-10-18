import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script/script.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(scriptService: ScriptService) {
    scriptService.loadAll();
  }

  ngOnInit() {
  }

}
