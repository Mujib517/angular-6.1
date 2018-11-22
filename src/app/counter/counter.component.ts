import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>{{count}}</h1>`
})
export class CounterComponent implements OnChanges {
  @Input()
  count: number;

  ngOnChanges(change: SimpleChanges) {
    // if (change.count.currentValue === 10) this.count = 0;
    console.log(change);
  }

}