import { Component } from "@angular/core";
import { ProductService } from '../services/product.serivce';
import { ConsoleLogger } from "../services/console.logger";
import { Router } from "@angular/router";

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
     &nbsp;&nbsp;
     <button routerLink="/products/reactive-form" class="btn btn-primary">Reactive Form</button>
     <div *ngFor="let product of products;">
      <app-product [product]="product" (notify)="onNotified()"></app-product>
    </div>
  </div>
  `
})
export class ProductListComponent {

  products: any;
  loading: boolean;

  constructor(private svc: ProductService,
    private logger: ConsoleLogger, private router: Router) {
    this.load();
  }

  onNotified() {
    this.load();
  }

  private load() {
    this.loading = true;
    this.logger.warn("Loading data.");
    this.svc.get()
      .subscribe(res => {
        this.products = res;
        this.loading = false;
      }, err => {
        this.loading = false;
        //if (err.status === 401) 
        this.router.navigate(["/login"]);
      });
    this.logger.log("Loaded");
  }
}