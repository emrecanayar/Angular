import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomStrategy } from './starategies/custom.strategy';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Moduler yapı kurarak lazy loading yüklemesini aşağıdaki gibi bir yapı oluşturduğumuzda kurabiliriz.
  {
    path: 'customers',
    loadChildren: () =>
      import('../app/components/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
    data: { preload: true }, //Custom olarak preload kontrolünü yapacağımız işlem. True ise yükleyecek şekilde kurgulayacağız.
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../app/components/products/products.module').then(
        (m) => m.ProductsModule
      ),
      data: { preload: false }, //Custom olarak preload kontroülünü yapacağımız işlem. False yüklemeyecek şekilde kurgulayacağız.
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomStrategy }), //Önden yükleme yapmak için burayı bu şekilde kurgulamamız gerekmektedir.
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
