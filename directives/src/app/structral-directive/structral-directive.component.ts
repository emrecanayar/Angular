import { Component } from '@angular/core';

@Component({
  selector: 'app-structral-directive',
  // templateUrl: './structral-directive.component.html',
  template: `
    <div *appCustomif="true">Merhaba</div>
    <ul>
      <!-- index parametresini customDirective den dönen değer olarak alabiliriz. -->
      <li *appCustomfor="5; let index = index">Emre Can {{ index }}</li>
    </ul>
    <ul>
      <!-- index parametresini customDirective den dönen değer olarak alabiliriz. -->
      <li *appCustomarrayfor="names; let name; let index = index">
        {{ name }} - {{ index }}
      </li>
    </ul>
  `,
  styleUrls: ['./structral-directive.component.scss'],
})
export class StructralDirectiveComponent {
  names: string[] = [
    'Ahmet',
    'Murtaza',
    'Rıfkı',
    'Şuayip',
    'Hilmi',
    'Hüseyin',
    'Emre Can',
  ];
}
