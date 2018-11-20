import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[show]',
  inputs: ['show']
})
export class ShowDirective {

  constructor(private el: ElementRef) { }

  set show(val: boolean) {
    this.el.nativeElement.style.display = val ? 'block' : 'none';
    // if (val) {
    //   this.el.nativeElement.style.display = 'block';
    // }
    // else {
    //   this.el.nativeElement.style.display = 'none';
    // }
  }
}