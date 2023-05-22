import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Moduler yapı kurarak lazy loading yüklemesini aşağıdaki gibi bir yapı oluşturduğumuzda kurabiliriz.
  {
    path: 'customers',
    loadChildren: () =>
      import('../app/components/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../app/components/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
