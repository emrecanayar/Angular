import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-example data="Merhaba">Burası component content alanıdır.</app-example>
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-life-cyles';
}
