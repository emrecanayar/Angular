import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomArrayForDirective]'
})
export class CustomArrayForDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appCustomarrayfor(value: string[]) {
    for (let i = 0; i < value.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: value[i],
        index:i
      });
    }
  }
}
