import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `Product`,
})
export class ProductComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    console.log(router.getCurrentNavigation()?.extras.state); //Dinamik olarak tanımlanan state bilgilerinden de dataları bu şekilde okuyabiliriz.
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      //Route data ile gönderilen datayı bu şekilde alıp ekranda gösterebiliriz.
      console.log(data);
    });
  }
}
