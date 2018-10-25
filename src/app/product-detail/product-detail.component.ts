import { Component } from "@angular/core";
import { ProductService } from "../services/product.serivce";

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
    </div>
  </div>
  </div>
  
  `
})
export class ProductDetailComponent {

  //? safe navigation operator
  product: any={};

  constructor(svc: ProductService) {
    const id = "5b28ab487e329e0014e94613";
    svc.getById(id)
      .subscribe(res => this.product = res, err => console.log(err));
  }
}