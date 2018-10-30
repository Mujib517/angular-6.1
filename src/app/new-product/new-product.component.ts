import { Component } from "@angular/core";
import { ProductService } from "../services/product.serivce";
import { Router } from '@angular/router';

@Component({
  template: `<h1>New Product</h1>

   <div class="col-md-6">
   
   <div *ngIf="success" class="alert alert-success">Successfully Saved!!</div>
   <div *ngIf="failed" class="alert alert-danger">Failed to save data. Please try again</div>

   <div class="form-group">
      <input type="text" placeholder="Brand" class="form-control" [(ngModel)]="product.brand"  />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Model" class="form-control" [(ngModel)]="product.model"  />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Price" class="form-control" [(ngModel)]="product.price"  />
    </div>
    <div class="form-group">
      <input type="checkbox" [(ngModel)]="product.inStock" />
      InStock
    </div>
    <div class="form-group">
      <button class="btn btn-success" (click)="onSave()">
        Save Product
        <img *ngIf="loading" src="/assets/images/loading.gif" width="30" height="30"/>
      </button>
    </div>
   </div>
   
   `
})
export class NewProductComponent {

  product: any = {};
  success: boolean;
  failed: boolean;
  loading: boolean;

  constructor(private svc: ProductService, private router: Router) { }

  onSave() {
    this.loading = true;
    this.svc.save(this.product)
      .subscribe(res => {
        this.success = true;
        this.failed = false;
        this.product = {};
        this.loading = false;
        //this.router.navigate(["/products"]);
      }, err => {
        this.failed = true;
        this.success = false;
        this.loading = false;
      });
  }
}