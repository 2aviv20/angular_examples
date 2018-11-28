import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle-example',
  templateUrl: './cycle-example.component.html',
  styleUrls: ['./cycle-example.component.css']
})
export class CycleExampleComponent implements OnInit {

  constructor() { 
    console.log("constructor");
  }

  ngOnChanges(){console.log("ngOnChanges");}
  ngOnInit() {console.log("ngOnInit");}
  ngDoCheck(){console.log("ngDoCheck");}
  ngAfterContentInit(){console.log("ngAfterContentInit");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked");}
  ngAfterViewInit(){console.log("ngAfterViewInit");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked");}
  ngOnDestroy(){console.log("ngOnDestroy");}

}
