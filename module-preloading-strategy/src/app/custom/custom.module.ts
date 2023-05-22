import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';



@NgModule({
  declarations: [
    CustomComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomComponent // Bu componetin içeriğini başka bir module e aktarmak istediğimizde burada exports içerisinde bunu tanımlamamız gerekmektedir.
  ]
})
export class CustomModule { }
