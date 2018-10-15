import { Component } from '@angular/core';

@Component({
  template: `<h1>Hello World</h1> 
      <h1>{{result?"Passed":"Failed"}}</h1>
      <button (click)="onClick()" [disabled]="getResult()">Enroll for Course</button>
      <input type="text" [value]="result"/>

      <h1 [class.red]="count" [style.border]="count?'3px solid green':0">{{count}}</h1>

      <h1 *ngIf="count">NG If Demo</h1>

      <div [ngSwitch]="count">
        <h1 *ngSwitchCase="3">Low</h1>
        <h1 *ngSwitchCase="6">Medium</h1>
        <h1 *ngSwitchCase="9">High</h1>
        <h1 *ngSwitchDefault>Average</h1>
      </div>

      <input type="text" (keyup)="onChange($event)" />

      <h1 [ngStyle]="stl" [ngClass]="{red:count>0,green:count<=0}">{{text}}</h1>


      <button (click)="inc()">++</button>
      <button (click)="dec()">--</button>
`,
  selector: 'app-root'
})
export class AppComponent {
  private result = true;
  private count = 0;
  private text = "Hello";
  //ngClass :string, array,object
  //private cls: string[] = ["red", "green"];
  private stl: any = {
    border: '3px solid black',
    'border-radius':'15px'
  };

  private onClick() {
    console.log("Button clicked");
  }

  private onChange(evt) {
    this.text = evt.target.value;
  }

  private inc() {
    this.count++;
  }

  private dec() {
    this.count--;
  }


  private getResult() {
    return !this.result;
  }

  // by default private
  //0,"",false,undefined,NaN,null
  //no conditional stmts. if else switch. Ternary prop ?:  && ||
  // lite weight, no side effects
  // props, model, state
  // property binding
  // SOA
  //class binding
  //directives: ngIf,ngClass, ngStyle, ngSwitch,ngFor
}


