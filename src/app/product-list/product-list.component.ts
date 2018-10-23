import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductService } from '../services/product.serivce';

@Component({
  selector: 'app-product-list',
  template: `
  
  <div class="container">
    <h1>Product List</h1>
     <div *ngFor="let product of products;">
      <app-product [product]="product"></app-product>
    </div>
  </div>
  `
})
export class ProductListComponent {

  products: any;

  constructor(svc: ProductService) {
    svc.get()
      .subscribe(res => this.products = res, err => console.log(err));
  }
}