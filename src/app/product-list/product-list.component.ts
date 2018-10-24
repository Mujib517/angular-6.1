import { Component } from "@angular/core";
import { ProductService } from '../services/product.serivce';
import { ConsoleLogger } from "../services/console.logger";

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

  constructor(svc: ProductService, logger: ConsoleLogger) {
    logger.warn("Loading data.");
    
    svc.get()
      .subscribe(res => this.products = res, err => console.log(err));
    
      logger.log("Loaded");
  }
}