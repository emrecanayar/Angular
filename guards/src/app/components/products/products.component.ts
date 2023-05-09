import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  template: `<br />
    Products
    <router-outlet></router-outlet>

    <br />
    <ul>
      <li *ngFor="let photo of photos">
        <a routerLink="[photo.id]">{{ photo.url }}</a>
      </li>
    </ul> `,
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // constructor(private httpClient: HttpClient) {}
  constructor(private activatedRoute: ActivatedRoute) {} //Resolve guardını oluşturduğumuz için artık veriyi ActivatedRoute üzerinden alacağız.
  photos: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: any) => (this.photos = data['photos'])
    ); //Guard içerisinde subsribe olmamıştık burada subscribe olarak datayı alıp tanımladığımız değişkene atıyoruz.
  }
}
