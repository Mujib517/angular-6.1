import { Component } from "@angular/core";
import { ProductService } from '../services/product.serivce';
import { ConsoleLogger } from "../services/console.logger";

@Component({
  selector: 'app-product-list',
  template: `
  <div class="loader"  *ngIf="loading">
    <img  src="/assets/images/loading.gif" width="30" height="30"/>
    Loading
  </div>
  <div *ngIf="!loading">
    <h1>Product List</h1>
     <button routerLink="/products/new" class="btn btn-primary">Add New Product</button>
     <div *ngFor="let product of products;">
      <app-product [product]="product"></app-product>
    </div>
  </div>
  `
})
export class ProductListComponent {

  products: any;
  loading: boolean;

  constructor(svc: ProductService, logger: ConsoleLogger) {
    this.loading = true;
    logger.warn("Loading data.");

    svc.get()
      .subscribe(res => {
        this.products = res;
        this.loading = false;
      }, err => {
        this.loading = false;
        console.log(err);
      });

    logger.log("Loaded");
  }
}