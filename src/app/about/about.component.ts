import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1> 
  
  <h1 [show]="false">Heading</h1>

  <h1 *if="prop">Heading 2</h1>

    <app-question>
      <h1 class="cls1">My Question</h1>
      <div class="cls2">My Footer</div>
    </app-question>
  `
})
export class AboutComponent {
  prop: boolean = false;
}

// constructor: initialization
// ngOnChanges
// ngOnInit : init web svc calls
// ngDoCheck
// ngOnDestroy

