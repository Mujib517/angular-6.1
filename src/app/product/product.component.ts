import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-product',
  template: ` 
  <div class="card">
    <div class="card-body">
    <h3 class="card-title">{{product.brand | uppercase}} {{product.model | lowercase}}</h3>
    <b>{{product.price | currency}}</b>
    <!-- <div>In Stock: {{product.inStock ? 'Yes':'No'}}</div> -->
    <div>In stock: <input type="checkbox" disabled="true" [checked]="product.inStock" /></div>
    <div>{{product.lastUpdated | date:'MMM-dd-yyyy hh:mm:ss a'}}</div>
    </div>
  </div>`
})
export class ProductComponent {
  @Input()
  product: any;
}

// dumb components