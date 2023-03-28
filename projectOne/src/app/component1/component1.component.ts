import { Component } from '@angular/core';

@Component({
  selector: 'app-com1',
  // templateUrl: './com1.component.html',
  template: `<h1>{{ title }}</h1>
    <input type="text" [value]="title" />
    <!-- property binding kullanımı bu şekilde olur. -->
    <app-home [pageName]="pageName"></app-home>
    <!-- Two-way-data-binding -->
    <!-- ngModel kullanımı için uygulamanın ana modülünde(app.module.ts) FormsModule imports edilmelidir. -->
    <input type="text" [(ngModel)]="twoWaybinding" />
    {{twoWaybinding}}

    `,
  styleUrls: ['./com1.component.scss'],
})
export class Com1Component {
  title: string =
    'text interpolation kullanımı => Component içerisinde tanımlamam değişken';

  pageName: string =
    'Property binding ile beraber değer atama işlemi gerçekleştirildi.';

  twoWaybinding:string ="";
}
