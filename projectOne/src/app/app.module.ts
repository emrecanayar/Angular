import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Com1Component } from './com1/com1.component';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ExampleDirective } from './directives/example.directive';
import { StructralDirectiveComponent } from './structral-directive/structral-directive.component';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomarrayforDirective } from './directives/customarrayfor.directive';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { CustomPipesPipe } from './pipes/custom-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Com1Component,
    InterpolationComponent,
    DirectivesComponent,
    CustomDirectiveComponent,
    ExampleDirective,
    StructralDirectiveComponent,
    CustomifDirective,
    CustomforDirective,
    CustomarrayforDirective,
    PipesComponentComponent,
    CustomPipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
