import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="container navbar navbar-expand-lg bg-dark">
     &copy;2018 myproducts.com
  </footer> 
  `
})
export class FooterComponent {
  count: number = 0;

  ngOnInit() {
    ++this.count;
  }
}