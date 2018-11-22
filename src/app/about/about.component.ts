import { Component } from "@angular/core";
import { QuestionComponent } from "../question/question.component";

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

// constructor: initialization. executes once
// ngOnChanges: executes multiple times
// ngOnInit : init web svc calls. executes once
// ngDoCheck
// ngOnDestroy: before removing from dom. executes once
