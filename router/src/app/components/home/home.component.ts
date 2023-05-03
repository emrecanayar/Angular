import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `Home`,
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    var hasValue = activatedRoute.snapshot.paramMap.has('id'); // Sayfanının url indeki route da gelen değeri okumak için kullanılır eğer değer varsa true döner.

    console.log(hasValue);
    if (hasValue) {
      var value = activatedRoute.snapshot.paramMap.get('id'); //Sayfanın url indendeki route da gelen değeri okur ve değerini elde eder.
      alert(value);
    }

    //Observable olarak url de bulunan route değerini elde edelim. Route her değiştiinde burası dinamik olarak veriyi elde eder. (Bunu kullanmak en uygunudur.)
    activatedRoute.paramMap.subscribe({
      next: (parameter) => {
        console.log(parameter.get('id'));
      },
    });
  }
}
