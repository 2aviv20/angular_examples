import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms' 
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  name = new FormControl('');
  constructor() { 
    this.name.valueChanges.subscribe((data) => console.log(data,"name valueChanges"));
  }

  updateName(){
    this.name.setValue("aviv");
  }
  ngOnInit() {
  }

}
