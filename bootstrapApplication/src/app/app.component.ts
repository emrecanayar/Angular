import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true, //Standalone component bu şekilde oluşturulmaktadır. Uygulamayı bu şekilde ayağı kaldıracağımızdan dolayı app.module boşa çıktığından dolayı onu kaldırıyoruz artık uygulama main.ts den çalışacak.
  imports:[RouterModule,NgSwitchDefault,NgSwitchCase,NgSwitch] // Ben App module den işlemleri kurtartığım için artık CommonModule içerisinde gelen her şeyi buradan import etmem  gerekiyor. İstersek direkt olarak Common Module de import edebiliriz istersekte bu şekilde parça parça ne kullanacaksak bunları import edebiliriz.
})
export class AppComponent {
  title = 'bootstrapApplication';
}
