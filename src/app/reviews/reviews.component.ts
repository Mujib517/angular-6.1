import { Component } from "@angular/core";
import { ProductService } from "../services/product.serivce";
import { Review } from "../models/review.model";

@Component({
  selector: 'app-product-reviews',
  template: `<h3 *ngIf="reviews && reviews.length>0">Reviews</h3> 
  <h4 *ngIf="!reviews || reviews?.length===0">Be the first one to review</h4>
 <div *ngFor="let review of reviews">
   <h4>{{review.name}} {{review.rating}} *</h4>
   <b>{{review.subject}}</b>
   <p>{{review.message}}</p>
   <div>{{lastUpdated | time}}</div>
   <hr/>
 </div>`
})
export class ReviewsComponent {
  reviews: Review[];

  constructor(svc: ProductService) {
    this.reviews = svc.reviews;
  }
}