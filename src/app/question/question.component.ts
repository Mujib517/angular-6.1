import { Component } from '@angular/core';


@Component({
  selector: 'app-question',
  template: `
    <div class="card">
    <div class="card-header">
      Question
    </div>
    <div class="card-body">
      <ng-content></ng-content>
    </div>
    </div>
  `
//  content projection
})

export class QuestionComponent { }