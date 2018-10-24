import { Component } from '@angular/core';

@Component({
  template: `
  <app-header></app-header>
  <main>
    <app-product-list></app-product-list>
  </main>
  <app-footer></app-footer>
  
  `,
  selector: 'app-root'
})
export class AppComponent {
}
