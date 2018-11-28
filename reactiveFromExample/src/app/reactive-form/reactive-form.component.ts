import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm : FormGroup
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('',  [Validators.maxLength(2), Validators.max(300)]),
      lastName : new FormControl('' ,Validators.maxLength(10)),
      age: new FormControl('', Validators.min(20))
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }

}
