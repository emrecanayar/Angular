import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-read-user',
  template:`
  <ul>
    <li *ngFor="let name of userService.users">{{name}}</li>
  </ul>
  `,
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent {
  constructor(public userService: UserService) {}


}
