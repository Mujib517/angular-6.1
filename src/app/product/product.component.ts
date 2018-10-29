import { Component, Input } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: 'app-product',
  template: ` 
  <div class="card">
    <div class="card-body">
    <a routerLink="/products/{{product._id}}"><h3 class="card-title">{{product.brand | uppercase}} {{product.model | lowercase}}</h3></a>
    <b>{{product.price | currency}}</b>
    <!-- <div>In Stock: {{product.inStock ? 'Yes':'No'}}</div> -->
    <div>In stock: <input type="checkbox" disabled="true" [checked]="product.inStock" /></div>
    <div>{{product.lastUpdated | date:'MMM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{getRelativeTime(product.lastUpdated)}}</div>
    </div>
  </div>`
})
export class ProductComponent {
  @Input()
  product: any;

  getRelativeTime(date) {
    return moment(date).fromNow();
  }
}

// dumb components