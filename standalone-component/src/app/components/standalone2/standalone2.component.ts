import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone2',
  standalone: true, //Standalone componentler modüllere declare edilemez. Import edilip kullanabilir.
  imports: [CommonModule],
  templateUrl: './standalone2.component.html',
  styleUrls: ['./standalone2.component.scss']
})
export class Standalone2Component {

}
