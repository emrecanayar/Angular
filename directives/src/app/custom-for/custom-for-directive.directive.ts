import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomForDirective]'
})
export class CustomForDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

   //Directive kullanılan html elementinde parametre olarak gelen değer kadar for döngüsü yapılır.
   @Input() set appCustomfor(value: number) {
    for (let i = 0; i < value; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
       //Bu kısımda directive kullanım sonucu geriye bir parametre veya değer döndürebiliyoruz. Örnek olarak index numarasını geriye döndürelim.
        index: i,
      });
    }
  }

}
