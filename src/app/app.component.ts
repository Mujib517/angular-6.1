import { Component } from '@angular/core';

@Component({
  template: `
  <app-header></app-header>
  <main class="container">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
  `,
  selector: 'app-root'
})
export class AppComponent {
}
