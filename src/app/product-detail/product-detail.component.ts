import { Component, OnInit } from "@angular/core";
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
    <a class="nav-link" routerLinkActive="active" routerLink="reviews">Reviews</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" routerLinkActive="active" routerLink="more">More</a>
  </li>
</ul>
<div><router-outlet></router-outlet></div>
  `

})
export class ProductDetailComponent implements OnInit {

  //? safe navigation operator
  product: any = {};

  constructor(private svc: ProductService, private route: ActivatedRoute) { }

  //hook
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.svc.getById(id)
      .subscribe(res => {
        this.product = res;
        this.svc.reviews = this.product.reviews;
      }, err => console.log(err));
  }
}