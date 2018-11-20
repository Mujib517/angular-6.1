import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  template: `<h1>Contact Page</h1>
    <h1>{{count}}</h1>

    <button (click)="reset()">Reset</button>
    <button (click)="call()">Call API</button>
  `,
})
export class ContactComponent {
  //CD. 
  // Asynchronous operation completion
  // DB,File,Events, Timers
  count: number = 0;

  constructor(private http: HttpClient) {
    setInterval(() => ++this.count, 1000);
  }

  reset() {
    this.count = 0;
  }

  call() {
    setInterval(() => ++this.count, 1000);
    this.http.get('api/products').
      subscribe(res => this.count = 100);
  }

}