import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';

//Burada belirtilen path çağrıldığında hangi componenet karşılanacak bu belirleniyor.
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default route ayarlama uygulama çalışmaya başladığında açılacak ilk component
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent }, //Route parametreli path tanımlama bu şekilde gerçekleşmektedir.
  { path: 'contact/a/b/c', component: ContactComponent }, //bu şekilde birden fazla bir route yapılandırılması olursa app.component.ts ye bakın.
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent }, //Uygulama içerisinde bulunan pathlerden dışında başka bir adres ile uygulamaya istek atıldığında burası çalışmaktadır. 404 not found böyle bir sayfa bulunanmamıstır vs gibi sayfalar burada tanımlanmaktadır. Bu tanımlama her zaman en aşağıda olmalıdır.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
