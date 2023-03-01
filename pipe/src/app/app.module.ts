import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { CustomPipePipe } from './custom-pipe/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponentComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
