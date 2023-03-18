import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childddd',
  template: ` <p>Childddd Component</p>
  <p>{{data}}</p>
  `,
})
export class ChilddddComponent {
  @Input() data: string = '';
}
