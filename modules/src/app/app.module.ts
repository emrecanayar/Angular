import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { HomeComponent } from './home/home.component';
import { CustomStrategy } from './starategies/custom.strategy';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CustomModule],
  providers: [CustomStrategy], //Oluşturduğumuz CustomStrategy de buraya eklememiz gerekmektedir. Nerede kullanmamız gerekiyorsa buraya eklememiz gerekmektedir.
  bootstrap: [AppComponent],
})
export class AppModule {}
