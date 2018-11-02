import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-product-reviews',
  template: `<h3 *ngIf="reviews && reviews.length>0">Reviews</h3> 
  <h4 *ngIf="reviews?.length===0">Be the first one to review</h4>
 <hr/>
 <div *ngFor="let review of reviews">
   <h4>{{review.name}} {{review.rating}} *</h4>
   <b>{{review.subject}}</b>
   <p>{{review.message}}</p>
   <div>{{lastUpdated | time}}</div>
   <hr/>
 </div>`
})
export class ReviewsComponent {
  @Input()
  reviews: any;
}