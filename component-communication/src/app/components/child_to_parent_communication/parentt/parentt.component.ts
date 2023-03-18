import { Component } from '@angular/core';

@Component({
  selector: 'app-parentt',
  template: `
  <p>Parentt Component</p>
  <!-- Child component eventini component selectoru üzerinde bu şekilde belirtiyoruz ve component içerisinde tanımadlığımı fonksiyona bunu atıyoruz. $event ile gelen veriyi karşılamış oluyoruz. -->
  <app-childd (dataEvent)="childEvent($event)"></app-childd>
  `,
})
export class ParenttComponent {

  //Child component gönderilen eventi burada bu şekilde karşışıyoruz.
  childEvent(obj:any){
    console.log(obj);
  }
}
