import { ProductComponent } from './app/product/product.component';

import { HomeComponent } from './../../router/src/app/components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { importProvidersFrom, inject } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'url', useValue: 'https://emrecanayar.com' }, // Örnek bir provide tanımlama şekli
    importProvidersFrom(HttpClientModule), //Örnek bir Module tanımlama şekli
    provideRouter(
      [
        { path: '', component: HomeComponent }, //Örnek bir route tanımlama isteği
        {
          path: 'product/:id',
          component: ProductComponent,
          data: {
            productName: 'Terlik',
          },
          resolve: {
            products: (route, state) => {
              const httpClient: HttpClient = inject(HttpClient);
              return httpClient.get(
                'https://jsonplaceholder.typicode.com/photos'
              );
            },
          },
        }, //Router input özelliği örnek kullanımı
      ],
      withPreloading(PreloadAllModules) //Preloading mekanızmasını aktif etme şekli.
      ,withComponentInputBinding() //Bununla beraber Router Input özelliğini kullanarak path den gelen dataları verileri guarddan gelen verileri route daki parametreyi vs. hepsini okuyabiliyoruz. (ProductComponent içerisinde bu duruma bakabilirsiniz.)
    ),
  ],
});
