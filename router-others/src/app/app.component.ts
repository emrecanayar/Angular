import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="home" routerLinkActive="active">Home</a>
    |
    <a
      routerLink="product"
      routerLinkActive="active"
      [state]="{ key3: 'value3', key4: 'value4' }" 
      >Product</a
    >
    <!-- [state] ile beraber dinamik olarak route data passing gerçekleştirebiliriz. Fakat bunu okumak için ilgili component üzerinde Router servisini inject etmemiz gerekmektedir. -->
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'router-others';
}
