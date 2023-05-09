import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a routerLink="home">Home</a> | <a routerLink="dashboard">Dashboard</a> | <a routerLink="about">About</a> | <a routerLink="products">Products</a>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guards';
}
