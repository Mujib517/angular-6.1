import { Component, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { observable } from "rxjs";

@Component({
  selector: 'app-contact',
  template: `<h1>Contact Page</h1>
    

    <app-counter [count]="cnt"></app-counter>

    <button (click)="reset()">Reset</button>
    <button (click)="call()">Call API</button>
    <button (click)="stop()">Stop</button>
  `,
})
export class ContactComponent implements OnDestroy {
  //CD. 
  // Asynchronous operation completion
  // DB,File,Events, Timers
  cnt: number = 0;
  interval: any;

  constructor(private http: HttpClient) {
    setInterval(() => ++this.cnt, 1000);
  }

  reset() {
    this.cnt = 0;
  }

  call() {
    this.interval = setInterval(() => ++this.cnt, 1000);
    this.http.get('api/products').
      subscribe(res => this.cnt = 100);
  }

  stop() {
    console.log("Stopped");
    clearInterval(this.interval);
  }

  //clean up
  ngOnDestroy() {
    //observable.unsubscribe();
    clearInterval(this.interval);
    console.log("Destroyed");
  }

}
//Event loop