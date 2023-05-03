import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //Query string ile gelen veriyi path de yani route taa bu şekilde kullanabiliriz.
  template: `<a routerLink="a" [queryParams]="{ x: 3 }">A</a> &
    <a routerLink="b" [queryParams]="bQuerystring" queryParamsHandling="preserve">B</a> <br />
    <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'query-string-route';

  //Component içerisinde tanımlanan bu şekildeki veriyide yukarıda görüldüğü üzere queryParams olarak belirtebilirim.
  bQuerystring: any = {
    y: 'emrecan',
  };
}
