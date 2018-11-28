import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.css']
})
export class FormGroupExampleComponent implements OnInit {
  myFromGroup = new FormGroup({
    name: new FormControl('',[Validators.max(8),Validators.min(3),Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('')
   });
  constructor() { }

  onSUbmit(){
    console.log(this.myFromGroup.value);
  }
  ngOnInit() {
  }

}
