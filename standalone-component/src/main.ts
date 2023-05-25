import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneComponent } from './app/components/standalone/standalone.component';

// Bu sayede appModule aradan cıkartıyoruz ve standalone component olarak uygulamayı başlatıyoruz. Artık CommonModule de gelecek olan ngIf,NgFor vs. işlevlerini ihtiyacımız doğrultusunda component içerisinde import edeceğiz ve ona göre işlemlerimizi devam ettereceğiz.

bootstrapApplication(StandaloneComponent)