import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIfDirective]'
})
export class CustomIfDirectiveDirective {

  constructor(
  //HTML yapısındaki elemente ulasıp dom üzerinde bunun yer alıp almaması gerektiğini aşağıdaki özelliklerle gerçekleştirebiliyoruz.
  private templateRef: TemplateRef<any>,
  private viewContainerRef: ViewContainerRef

  ) { }

  //Custom Structural Directive için set metodu yazılması gerekiyor. Selector içerisinde yazan değerle aynı isimde bir metot oluşturmamız gerekiyor ve bunu Input ile de tanımlamamız gerekiyor.
  @Input() set appCustomif(value: Boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
