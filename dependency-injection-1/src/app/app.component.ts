import { Component } from '@angular/core';
import { LoggerService, ProductService } from './productService';

//Dependency Injection yapmış olduğumuz çalışmalarda yeniden kullanılabilir bir davranış sergilememizi sağlayan çağdaş bir design patterndır.

//Dependecy injection angular mimarisinin temelinde dahili olarak gelmektedir.

//Dependecy Injection'ını kullanabilmek için yapılması gereken husus dependecny olan ilgili sınıfı uygulamanın provider'ına eklemek ve gerektiği noktada çağırmaktır.

//Şimdi ben örnek olarak bir ProductService yapısı oluşturacağım ve en basit haliyle dependency injection angular da nasıl uygulanır. Buna değiniyor olacağız.

//Oluşturduğumuz service yapılanmasını ister bu componentin providers ına verebiliriz. İstersekte bağlı olduğu module un providers ına verebiliriz. Peki bunlar arasındaki fark nedir. Fark şudur eğer ben component providerına verirsem sadece bu component üzerinde DI şeklinde kullanabilirim ama bu componentın baglı oldugu module un providers ına verirsem işte o zaman o modüle bağlı bütün componentler bunu DI olarak kullanabilir. Ben şimdi bu örnekte module içerisindeki provider a bunu vereceğim.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dependency-injection-1';

  //DI en basit kullanımı bu şekildedir. Constuructera parametre olarak DI da bulunan nesnenin bir referansını geçiyoruz.
  constructor(
    private productService: ProductService,
    private loggerService: LoggerService
  ) {
    console.log(productService.getProducts());
  }
}
