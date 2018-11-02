import { Component,Input } from "@angular/core";

@Component({
  selector: 'app-product-more-info',
  template: `<div><b>Rating {{avgRating}} *</b></div>`
})
export class MoreInfoComponent {
  @Input()
  avgRating: number;
}