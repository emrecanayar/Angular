import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>Home Component</h3>
  <ng-content select="header"></ng-content>
  <ng-content select="body"></ng-content>
  <ng-content select="footer"></ng-content>

<!-- Özel olarak oluşturduğumuz ng contentler isimleri tamamen bize ait ve bunlara göre parent tan gönderebililiriz. -->

<table>
  <tr>
    <td>
      <ng-content select=".solMenu"></ng-content>
    </td>
    <td>
      <ng-content select=".ortaMenu"></ng-content>
    </td>
    <td>
      <ng-content select=".sagMenu"></ng-content>
    </td>
  </tr>
</table>

    `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class HomeComponent {}

//ng-content alanı parent componentten child componente veri aktarırıken dinamik olacak bir şekilde veri aktarmaya yarar. İster küçük bir veri istersek de kocaman bir html yapısı aktarabiliriz. Bu kısım dinamik bir şekilde şekillendirilir örneğin belirli başlı işlemler ışığında ekranda gösterilecek alanı ng-content ile gösterebiliriz. Bir sipariş verilidiğinde ekrana yeşil bir uyarı cıkacaksa yada bir sorun oldugunda kırmızı bir uyarı cıkacaksa işte bu her iki yapıyıda tutacak olan alan ng-content olabilir ve hangi durumda hangisi olacaksa ona göre şekillendirlir.

//Bir sayfada birden fazla ng-content kullanabiliriz. Bunun için ng-content in özel select lerini kullanabiliriz. Yukarıdaki örnekte bunları görebilirsiniz.

//Özel olarak oluşturduğumuz ng-contentler de mevcuttur. Bunlar için css de class selector mantığıyla bu işlemi gerçekleştirebiliyoruz. Yukarıdaki template içerisine de bunu belirteceğiz.


/*

  <div style="background-color:blue; color:white">
      <ng-content></ng-content>
    </div> 
    <div style="background-color:green; color:white">
      <ng-content></ng-content>
    </div> 

    <div style="background-color:red; color:white">
      <ng-content></ng-content>
    </div> 

*/