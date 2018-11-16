import { Component } from "@angular/core";
import { ProductService } from "../services/product.serivce";
import { Router } from '@angular/router';
import { Product } from "../models/product.model";

// template driven, model driven (reactive forms)
@Component({
  template: `<h1>New Product</h1>

  <table class="table">
    <thead>
      <tr>
        <th>
          Field
        </th>
        <th>
          Valid
        </th>
        <th>
          Invalid
        </th>
        <th>Pristine</th>
        <th>Dirty</th>
        <th>Touched</th>
        <th>Errors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Brand</td>
        <td>{{brand.valid}}</td>
        <td>{{brand.invalid}}</td>
        <td>{{brand.pristine}}</td>
        <td>{{brand.dirty}}</td>
        <td>{{brand.touched}}</td>
        <td>{{brand.errors | json}}</td>
      </tr>
    </tbody>

   </table> 
  
  <div class="col-md-6">
    <div *ngIf="success" class="alert alert-success">Successfully Saved!!</div>
   <div *ngIf="failed" class="alert alert-danger">Failed to save data. Please try again</div>
  <form novalidate #frm="ngForm">
      <div class="form-group">
        <input #brand="ngModel" minlength="3" maxlength="10" name="brand" type="text" placeholder="Brand" class="form-control" [(ngModel)]="product.brand" required  />
        <span *ngIf="brand.touched && brand.errors?.required" class="text-danger">Required</span>
        <span *ngIf="brand.touched && brand.errors?.minlength" class="text-danger">Min 3 chars</span>
        <span *ngIf="brand.touched && brand.errors?.maxlength" class="text-danger">Max 10 chars</span>
      </div>
      <div class="form-group">
        <input #model="ngModel" required name="model" type="text" placeholder="Model" class="form-control" [(ngModel)]="product.model"  />
        <span *ngIf="model.touched && model.invalid" class="text-danger">Required</span>
        </div>
      <div cla requiredss="form-group">
        <input #price="ngModel" required name="price" type="text" placeholder="Price" class="form-control" [(ngModel)]="product.price"  />
        <span *ngIf="price.touched && price.invalid" class="text-danger">Required</span>
      </div>
      <div class="form-group">
        <input name="inStock" type="checkbox" [(ngModel)]="product.inStock" />
        InStock
      </div>
      <div class="form-group">
        <input #phone="ngModel" name="phone" type="textbox" [(ngModel)]="product.phone" class="form-control" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" />
        <span *ngIf="phone.errors?.pattern" class="text-danger">Invalid Phone number</span>
      </div>
      <div class="form-group">
        <input type="file" name="image" (change)="handleUpload($event)" />
      </div>
      <div class="form-group">
        <button class="btn btn-success" (click)="onSave()" [disabled]="frm.invalid">
          Save Product
          <img *ngIf="loading" src="/assets/images/loading.gif" width="30" height="30"/>
        </button>
      </div>
    </form>
   </div>
 
   `
})
export class NewProductComponent {

  product: Product = new Product();
  success: boolean;
  failed: boolean;
  loading: boolean;

  constructor(private svc: ProductService, private router: Router) { }

  handleUpload(event) {
    this.product.img = event.target.files[0];
  }

  onSave() {
    this.loading = true;
    this.svc.save(this.product)
      .subscribe(res => {
        this.success = true;
        this.failed = false;
        this.product = new Product();
        this.loading = false;
        //this.router.navigate(["/products"]);
      }, err => {
        this.failed = true;
        this.success = false;
        this.loading = false;
      });
  }
}