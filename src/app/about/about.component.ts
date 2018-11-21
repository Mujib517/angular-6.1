import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1> 
  
  <h1 [show]="false">Heading</h1>

  <h1 *if="prop">Heading 2</h1>

  <app-question>My Question goes here </app-question>
  `
})
export class AboutComponent {
  prop: boolean = false;
}