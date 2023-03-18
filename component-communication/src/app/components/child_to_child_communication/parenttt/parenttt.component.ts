import { Component } from '@angular/core';

@Component({
  selector: 'app-parenttt',
  template: `
    <div style="background-color:green">
      <p>Parenttt Component</p>

      <app-childdd (data)="childddEvent($event)"></app-childdd>
      <app-childddd [data]="childddToChilddddComponent"></app-childddd>
    </div>
  `,
})
export class ParentttComponent {

  childddToChilddddComponent : string = "";
  
  childddEvent(obj: any) {
    console.log(obj);
    this.childddToChilddddComponent = obj.message;
  }
}
