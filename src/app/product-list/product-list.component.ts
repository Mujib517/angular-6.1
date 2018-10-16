import { Component } from "@angular/core";

@Component({
  selector: 'app-product-list',
  template: `<h1>Product List</h1>
  
  <div>
    <div class="card" *ngFor="let product of products">
      <div class="card-body">
      <h3 class="card-title">{{product.brand | uppercase}} {{product.model | lowercase}}</h3>
      <b>{{product.price | currency}}</b>
       <!-- <div>In Stock: {{product.inStock ? 'Yes':'No'}}</div> -->
       <div>In stock: <input type="checkbox" disabled="true" [checked]="product.inStock" /></div>
       <div>{{product.lastUpdated | date:'MMM-dd-yyyy hh:mm:ss a'}}</div>
      </div>
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