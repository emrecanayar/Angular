import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<h2>Products</h2>
    <br />
    <a [routerLink]="['detail', 2]"> Product Details</a> <br />
    <router-outlet></router-outlet> `,
})
export class ProductComponent {}
