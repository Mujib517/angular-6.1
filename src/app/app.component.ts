import { Component } from '@angular/core';

@Component({
  template: `<h1>Hello World</h1> 
      <h1>{{result?"Passed":"Failed"}}</h1>
      <button [disabled]="getResult()">Enroll for Course</button>
      <input type="text" [value]="result"/>
`,
  selector: 'app-root'
})
export class AppComponent {
  private result = true;

  private getResult() {
    return !this.result;
  }

  // by default private
  //0,"",false,undefined,NaN,null
  //no conditional stmts. if else switch. Ternary prop ?:  && ||
  // lite weight, no side effects
  // props, model, state
  // property binding
}


