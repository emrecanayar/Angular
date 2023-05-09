import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import {
  canActivateChildGuard,
  canActivateGuard,
  canDeactiveGuard,
  isAdminGuard,
  isUserGuard,
  resolveGuard,
} from './guards/guard';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: AdminComponent,canMatch:[isAdminGuard] }, //Admin guard dan gelen sonuç true ise burası dashboard yönlenmek istediğimiz zaman AdminComponent çalışacak.
  { path: 'dashboard', component: UserComponent,canMatch:[isUserGuard] }, //User guard dan gelen sonuç true ise burası dashboard a yönlenmek istediğimiz zaman UserComponent çalışacak.
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [canActivateGuard], //Tanımlanan canActivate guardı buraya eklemiş olduk.
    canActivateChild: [canActivateChildGuard], //İlgili pathin child componenetine erişip erişememeyi burada kontrol edebiliyoruz.
    canDeactivate: [canDeactiveGuard], //İlgili path ten ayrılmak istediğimizde burası çalışır.
    resolve: { photos: resolveGuard }, //ResolveGuard dan ne zaman sonuç dönecek o zaman photos veriyi elde edecek. Bu şekilde kurgulanmıştır.
    children: [{ path: ':id', component: ProductDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
