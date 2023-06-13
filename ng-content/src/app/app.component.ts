import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
  <h3>App Component</h3>
  <app-home>
    Burası ng-content içeriğidir. Home component içerisinde tanımlamış olduğumuz ng-content alanını burada bu şekilde doldurarak gönderebiliriz.
    <header>Burası ng-content header içeriğidir.</header>
    <body>Burası ng-content body içeriğidir.</body>
    <footer>Burası ng-content footer içeriğidir.</footer>


    <!-- Özel olarak oluşturduğumuz ng-contentleri biz bu şekilde doldurabiliyoruz. -->
    <div class="solMenu">SolMenü İçeriği</div>
    <div class="ortaMenu">Orta Menü İçeriği</div>
    <div class="sagMenu">Sol Menü İçeriği</div>
  </app-home>
  `,
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[HomeComponent]
})
export class AppComponent {
  title = 'ng-content';
}


//Tanımlanmış olduğumuz birden fazla ng-contentlere veri gönderme işlemlerine bir bakalım.