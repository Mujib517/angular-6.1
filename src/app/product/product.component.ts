import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../services/product.serivce";

@Component({
  selector: 'app-product',
  template: ` 
  <div class="card">
    <div class="card-body">
    <img *ngIf="product.image" class="img img-thumbnail" width="150" height="200" [src]="product.image"/>
    <a routerLink="/products/{{product._id}}"><h3 class="card-title">{{product.brand | uppercase}} {{product.model | lowercase}}</h3></a>
    <b>{{product.price | currency}}</b>
    <!-- <div>In Stock: {{product.inStock ? 'Yes':'No'}}</div> -->
    <div>In stock: <input type="checkbox" disabled="true" [checked]="product.inStock" /></div>
    <div>{{product.lastUpdated | date:'MMM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{product.lastUpdated | time}}</div>
    <button class="btn btn-danger btn-sm" (click)="onDelete(product._id)">Delete</button>
    </div>
  </div>`
})
export class ProductComponent {
  @Input()
  product: any;

  @Output()
  notify: EventEmitter<any>;

  constructor(private svc: ProductService) {
    this.notify = new EventEmitter();
  }

  onDelete(id) {
    this.svc.delete(id)
      .subscribe(res => this.notify.emit(), err => console.log(err));
  }
}

// dumb components