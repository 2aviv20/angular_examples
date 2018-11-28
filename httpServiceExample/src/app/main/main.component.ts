import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public userData: any
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getUserData().then((data) => {
      this.userData = data;
      console.log(data);
    }, (error) => {this.userData = error});
  }

}
