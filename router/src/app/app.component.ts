import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="home" routerLinkActive="active">Home</a> |
    <a [routerLink]="['contact', 'a', 'b', 'c']" routerLinkActive="active">Contact</a>
    |
    <a routerLink="about" routerLinkActive="active">About</a>
    <hr />
    <!-- Bu etiketle berebar route ta gidilen sayfanın içeriğini görebiliriz.  -->
    <router-outlet></router-outlet>
  `,
  styles: ['.active{color:blue}'],
})
export class AppComponent {
  title = 'router';
}
//routerLinkActive aktif olan linki rengini farklı göstererek belirtir.