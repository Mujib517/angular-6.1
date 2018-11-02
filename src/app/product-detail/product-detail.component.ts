import { Component } from "@angular/core";
import { ProductService } from "../services/product.serivce";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  template: `<h1>Product Detail</h1>
  
  <div class="col-sm-6">

  <div class="card">
    <div class="card-header">
      {{product.brand }} {{product.model}}
    </div>
    <div class="card-body">
      <div>InStock {{product.inStock}}</div>
      <div>{{product.price | currency}}</div>
    </div>
    <div class="card-footer">
      {{product.lastUpdated | date}}
      ({{ product.lastUpdated | time}})
    </div>
  </div>
  </div>
  <br/>
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" [ngClass]="activeTab===0?'active':''" (click)="changeTab(0)">Reviews</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [ngClass]="activeTab===1?'active':''"  (click)="changeTab(1)">More</a>
  </li>
</ul>
  <app-product-more-info *ngIf="activeTab===1" [avgRating]="product.avgRating"></app-product-more-info>
  <app-product-reviews *ngIf="activeTab===0" [reviews]="product.reviews"></app-product-reviews>
  `

})
export class ProductDetailComponent {

  //? safe navigation operator
  product: any = {};
  activeTab: number = 0;

  constructor(svc: ProductService, route: ActivatedRoute) {
    const id = route.snapshot.params.id;

    svc.getById(id)
      .subscribe(res => this.product = res, err => console.log(err));
  }

  changeTab(val) {
    this.activeTab = val;
  }
}