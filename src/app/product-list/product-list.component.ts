import { Component } from "@angular/core";

@Component({
  selector: 'app-product-list',
  template: `
  
  <div class="container">
    <h1>Product List</h1>
     <div *ngFor="let product of products">
      <app-product [product]="product"></app-product>
    </div>
  </div>
  `
})
export class ProductListComponent {
  products: any[] = [{ id: 1, brand: "Nokia", model: "6.1", price: 500, inStock: true, lastUpdated: Date.now() },
  { id: 2, brand: "Apple", model: "Iphone X", price: 1500, inStock: false, lastUpdated: Date.now() },
  { id: 3, brand: "Samsung", model: "S9", price: 1200, inStock: true, lastUpdated: Date.now() }];

  //Pipes: formatting data MM/dd/yyyy    dd/MM/yyyy
  // date, currency, json,lowercase, uppercase, titlecase, async
}