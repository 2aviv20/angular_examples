import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getUserData(){
    return new Promise((resolve, reject) => {
      this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res) =>{
        resolve(res);
      },
      error => reject(error));
    });
  }
}
