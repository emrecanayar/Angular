import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
template:`
  <p>child works!</p>
  {{childData}}
`
})
export class ChildComponent {

  //Parent componentent bir data alacağımız zaman bunu child componente Input olarak bu şekilde tanımlıyoruz. Daha sonra bunu selector olarak kullanacağımız yerde parametre olarak childData yı görüyoruz oraya da verdiğimiz değeri ekranda gösterebiliriz.
 @Input() childData:string | undefined;
}
