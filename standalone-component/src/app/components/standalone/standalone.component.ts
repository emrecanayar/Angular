import { Component } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone: true, // bu component artık bir standalone componentir. Herhangi bir modülde declare edilemez.
  imports: [Standalone2Component, FormsModule, NgIf, NgFor], // Bir başka standalone component içerisinde standatloneComponent bu şekilde tanımlanıyor. İhtiyacımız olan modulu bu şekilde standalon componente bu şekilde import edebiliriz.
})
export class StandaloneComponent {
  data: any;
}
