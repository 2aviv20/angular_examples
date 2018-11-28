import { Component, OnInit } from '@angular/core';
import { ObservableExampleService } from '../observable-example.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  obj: any;
  constructor(private observableExampleService: ObservableExampleService){
    this.observableExampleService.updateStatisticData.subscribe((data) => {
      console.log(data);
      this.obj = data;
    });
  }

  ngOnInit() {
  }

}
