import { Component } from '@angular/core';

@Component({
  template: `<h1>Hello World</h1> 
  
  <table border="1" width="100%">
    <thead>
      <tr>
        <th>Value</th>
        <th>Index</th>
        <th>First</th>
        <th>Last</th>
        <th>Odd</th>
        <th>Even</th>
      </tr>
    </thead>
    <tbody>
      <tr [ngClass]="even?'bg1':'bg2'" *ngFor="let val of arr;
      let idx=index;let fst=first; 
      let lst=last;
      let odd=odd;
      let even=even">
        <td>{{val}}</td>
        <td>{{idx}}</td>
        <td>{{fst}}</td>
        <td>{{lst}}</td>
        <td>{{odd}}</td>
        <td>{{even}}</td>
      </tr>
    </tbody>
  </table>

`,
  selector: 'app-root'
})
export class AppComponent {
  arr: number[] = [1, 2, 3, 4, 5, 6]; //type inference
}

//2 cat: Structural Directives (*), Attribute directives

