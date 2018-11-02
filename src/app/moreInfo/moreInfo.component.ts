import { Component,Input } from "@angular/core";

@Component({
  selector: 'app-product-more-info',
  template: `<div *ngIf="avgRating"><b>Rating {{avgRating}} *</b></div>`
})
export class MoreInfoComponent {
  @Input()
  avgRating: number;
}