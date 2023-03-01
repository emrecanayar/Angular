import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  // templateUrl: './interpolation.component.html',
  template: `
    <!-- Interpolation operatöründe genel anlamda sadece field ve property gösterimi için kullanılır. Sayfanın state di değiştirecek işlemleri burada gerçekleştiremiyoruz. -->
    <p>{{ title }}</p>

    <!-- Interpolation operatöründe bu şekilde iki sayıyı toplayabiliriz. -->
    <p>İki sayının toplamı : {{ number1 + number2 }}</p>

    <!-- Interpolation operatöründe bu şekilde iki texti birleştirebiliriz. -->
    <p>İki metnin birleştirilme işlemi : {{ text1 + ' ' + text2 }}</p>

    <!-- Interpolation operatörüyle fonksiyon tetikleme işlemine örnek -->
    <p>{{ hi() }}</p>

      <!-- Interpolation operatörünü devre dışı bırakmak için. -->
    <p ngNonBindable>{{ ngNonBindable }} devre dışı</p>
      
    <!-- Interpolation operatörü kullanırken obje türü işlemlerde nullable operatörünü kullanmak daha doğru bir kullanım şeklidir.. -->
    <p>{{person?.name}}</p>
  `,
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent {
  //Bu operator tek yönlü binding olarak nitelendirilmektedir ve işleyişi bu şekilde gerçekleşmektedir. (One Way)
  title: string = 'Interpolation Syntax kullanımına detaylıca değiniyoruz.';

  //Aşağıdaki işlemleri interpolation operatörle gerçekleştirebiliriz.

  number1: number = 5;
  number2: number = 10;

  text1: string = 'Emre Can';
  text2: string = 'Ayar';
  //Fonksiyon tetikleme işlemi de gerçekleştirelebiliyor.
  hi() {
    console.log('Merhaba');
  }

  ngNonBindable: string =
    'Bu parametre interpolatition yapısını devre dışı bırakır.';

    //Özellikle obje türündeki nesnelerde objenin içerisindeki herhangi bir propertyi interpolation ile ekranda göstermek istiyorsak bunun boş olup olmadığını ? ile kontrol ederek ekranda göstermeliyiz.
  person: { name: string; surname: string } = {
    name: 'Emre Can',
    surname: 'Ayar',
  };
}
