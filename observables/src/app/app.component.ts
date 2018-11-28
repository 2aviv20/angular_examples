import { Component } from '@angular/core';
import { ObservableExampleService } from './observable-example.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  counter: number = 0
  constructor(private observableExampleService: ObservableExampleService){

  }
  btnPress(){
    this.observableExampleService.updateStatisticData.emit(`hellow ${this.counter}`);
    this.counter ++;
  }
}
