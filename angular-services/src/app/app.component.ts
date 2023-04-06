import { Component } from '@angular/core';

/*
Angular mimarisinde service yapılanması, belirli bir işlevi/sorumluluğu yerine getiren sınıfların ta kendisidir.
Bizler servislerde genelde componentlerde bulunan business işlemlerini alıp bu servisler içerisinde gerçekleştiririz. 
Yani bir componenente ki yegane gayemiz mümkün mertebe kullanıcı arayüzünü ilgilendiren işlemler yapmak business kurallarını vs bu tarz fiiliyatları biz service ler içerisinde yapıyoruz.

Bir servisin genel manada kullanım alanları aşağıdaki gibidir.

Fiiliyat gerçekleştirilen alanlar için kullanılabilir. (Matematiksel işlemler logicler)
Uygulamaların genel state ini burada tutabiliriz.
Herhangi bir dış servisten yada API den gelen verileri barındırabilir.
Component'ler arası veri iletişimi sağlayabilir. Bunun için örnekleri read-user-component, add-user-component ve user.service adımlarına bakabilirsin.

ng g s/service services/product => bu cli komutuyla da çok rahat bir şekilde biz service oluşturabiliriz.
CLI dan oluşan servisler direkt olarak Injectable olarak işaretlenmiştir ve provededIn root olarak işaretlenmiştir.

*/
@Component({
  selector: 'app-root',
  template: `<app-create-user></app-create-user><br />
    <app-read-user></app-read-user>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-services';
}
