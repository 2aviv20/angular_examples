import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  oneWayComponentToTemplate = "hellow aviv";
  twoWayBinding = "hellow aviv two way data";
  constructor() { }

  ngOnInit() {
  }

}
