import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  template: `
    <p>parent works!</p>
    <!-- Child componente input olarak tanımlanan veriye aşağıdaki gibi değer atayabiliriz. -->
    <app-child childData={{data}}></app-child>
    <!-- Bu şekilde de gönderebiliriz. -->
    <app-child [childData]="data"></app-child>
  `,
})
export class ParentComponent {
  data: string = 'Merhaba';
}
