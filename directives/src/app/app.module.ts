import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomIfDirectiveDirective } from './custom-if/custom-if-directive.directive';
import { CustomForDirectiveDirective } from './custom-for/custom-for-directive.directive';
import { CustomArrayForDirectiveDirective } from './custom-array-for/custom-array-for-directive.directive';
import { StructralDirectiveComponent } from './structral-directive/structral-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    CustomIfDirectiveDirective,
    CustomForDirectiveDirective,
    CustomArrayForDirectiveDirective,
    StructralDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
