import { Component } from '@angular/core';


@Component({
  selector: 'app-question',
  template: `
    <div class="card">
    <div class="card-header">
      Question
    </div>
    <div class="card-body">
      <ng-content select=".cls1"></ng-content>
    </div>
    <div class="card-footer">
      <ng-content select=".cls2"></ng-content>
    </div>
    </div>
  `
//  content projection
})

export class QuestionComponent { }