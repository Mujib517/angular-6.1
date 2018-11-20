import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1> 
  
  <h1 [show]="true">Heading</h1>


  `
})
export class AboutComponent { }