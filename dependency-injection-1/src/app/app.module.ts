import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService, ProductService } from './productService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  // providers: [ProductService,LoggerService], // DI Token - Default Type Token
  // providers: [
  //   { provide: ProductService, useClass: ProductService },
  //   LoggerService,
  // ], //Yukarıdaki providerın arka planda çalışma şeklini burada manuel olarak uyguladık bunun da adı => Type Token dır.
  // providers: [
  //   { provide: 'productService', useClass: ProductService },
  //   LoggerService,
  // ], //String token bunu kullanırken bir yerde @Inject("productService") şeklinde kullanmamız gerekmektedir.
  providers: [
    {
      provide: 'productService',
      useFactory: (httpClient: HttpClient) => {
        const obs = httpClient.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = firstValueFrom(obs);
        console.log(data);
        return ProductService;
      },
      deps: [HttpClient],
    },
    LoggerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

//Inject türlerine değinecek olursak yani (useClass,useValue,useFactory,useExisting)

/*

useClass => Bir tür/sınıf provide edilecekse eğer kullanılan providedır.
useValue => Basit metinsel değerleri provide etmek istediğimiz zaman kullanacağımız değerdir. Uygulamanın ayarlarını vs. okuyacağımız zaman bunu kullanabiliriz.
useFactory => Provide edilecek servisi yapılandırırken herhangi bir dış kaynaktan faydalanılacaksa konfigürasyonel değer alacaksa yahut farklı bir ihtiyaçtan dolayı bir API 'a bağlanılacaksa veya provide edilecek belirli şartlara göre farklı davranışlar sergileyecekse vs. bu ihtiyacı useFactory ile gerçekleştirebiliriz.


 */
