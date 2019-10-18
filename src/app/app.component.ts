import { Component, OnInit } from '@angular/core';
import { PageBlock } from './models/PageBlock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'BarFrontend';

  ngOnInit() { }
}
