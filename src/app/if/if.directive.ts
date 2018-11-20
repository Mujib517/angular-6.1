import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[if]',
  inputs: ['if']
})
export class IfDirective {

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

  set if(val: boolean) {
    if (val) {
      this.container.createEmbeddedView(this.template);
    }
    else {
      this.container.clear();
    }
  }
}