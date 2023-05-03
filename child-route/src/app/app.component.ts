import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a routerLink="products">Products</a> <br />
    <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'child-route';
}
