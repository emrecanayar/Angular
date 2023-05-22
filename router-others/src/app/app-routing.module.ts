import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: { key1: 'value1', key2: 'value2' }, //Componentlere giderken bu şekilde de data taşıyabiliriz.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
