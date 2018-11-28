import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableExampleService {
  
  updateStatisticData = new EventEmitter<string>();
  constructor() { 
    console.log("ObservableExampleService constructor");
  }
}
