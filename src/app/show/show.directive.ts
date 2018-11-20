import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: '[show]',
  inputs: ['show']
})
export class ShowDirective {

  constructor(private el: ElementRef, private render: Renderer) { }

  set show(val: boolean) {
    //this.el.nativeElement.style.display = val ? 'block' : 'none';
    this.render.setElementStyle(this.el.nativeElement, "display", val ? 'block' : 'none');
    // if (val) {
    //   this.el.nativeElement.style.display = 'block';
    // }
    // else {
    //   this.el.nativeElement.style.display = 'none';
    // }
  }
}