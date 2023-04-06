import { Inject, Injectable } from '@angular/core';

//Bir sınıfı provider'a eklemeksizin direkt olarak inject etmek istiyorsak eğer sınıfı @injectable ile işaretleyerek aşağıdaki gibi providedIn özelliğini root olarak ayarlayabiliriz. Böylece ilgili sınıflar provider'a eklenmeden uygulamanın herhangi bir yerinde inject edilerek kullanılabilir.
@Injectable({
  providedIn: 'root', //Bu parametre servisi sinleton olarak impelemente edecektir. Uygulamanın her yerinden bu servise erişim sağlanabilir.
//   provideIn:'any' // Bu paramete servisi birden fazla instance olacak şekilde implemente edecektir. Ne kadar module varsa her birine ayrı ayrı instance oluşturacaktır.

})
export class ProductService {
  constructor(@Inject("productService")private loggerService: LoggerService) {
   
  }
  getProducts(): Product[] {
    return [
      { name: 'Keyboard', quantity: 10 },
      { name: 'Mouse', quantity: 5 },
      { name: 'Pencil', quantity: 25 },
    ];
  }
}

export class Product {
  name: string;
  quantity: number;
}

export class LoggerService {
  log() {
    console.log('logging');
  }
}

//Yukarıdaki gibi bir durum olursa yani ProductService içerisinde başka bir servis inject edilirse o zaman tanımladığımız provider alanında sıkıntı yaşarız. Bu durumda öncelikle ProductService oluştururken birde LoggerService için bir instance tanımlamamız gerekmektedir. İşte bunu çözmek adına ProductService  başına @Injectable yazarsak bu şu anlama gelmektedir.Sen ve içerinde ne kadar servis varsa hepsini çözümle anlamına gelmektedir. Yani yukarıdaki duruma bakacak olursak ProductService içerisinde LoggerService ide otomatik olarak çözmüş oluyoruz.