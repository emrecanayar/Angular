import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ChilddComponent } from './components/child_to_parent_communication/childd/childd.component';
import { ParenttComponent } from './components/child_to_parent_communication/parentt/parentt.component';
import { ChildddComponent } from './components/child_to_child_communication/childdd/childdd.component';
import { ChilddddComponent } from './components/child_to_child_communication/childddd/childddd.component';
import { ParentttComponent } from './components/child_to_child_communication/parenttt/parenttt.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChilddComponent,
    ParenttComponent,
    ChildddComponent,
    ChilddddComponent,
    ParentttComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
