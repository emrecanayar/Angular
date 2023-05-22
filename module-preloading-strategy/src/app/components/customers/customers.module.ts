import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCustomerComponent,
    DetailCustomerComponent,
    ListCustomerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      //Module içerisindeki root lar bu şekilde burada tanımlanmaktadır.
      { path: 'customers/add', component: AddCustomerComponent },
      { path: 'customers/:id', component: DetailCustomerComponent },
      { path: 'customers', component: ListCustomerComponent },
    ]),
  ],
})
export class CustomersModule {}
