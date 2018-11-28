import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataArr: any[]
  constructor() { 
    this.dataArr = [
      {name: "aviv", role: 2, age: 22},
      {name: "maria", role: 1, age: 24},
      {name: "other", role: 2, age: 21},
      {name: "admin", role: 1, age: 27},
    ];
  }

  ngOnInit() {
  }

}
