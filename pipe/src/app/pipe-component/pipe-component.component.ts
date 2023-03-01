import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  // templateUrl: './pipes-component.component.html',
  template: `
    <!-- Pipe kullanmak için | ifadesi kullanılır. Angular içerisinde hazır olarak bulunan uppercase pipenı kullanarak küçük harflerle yazılan veriyi büyük harflere çevirir. -->
    {{ name | uppercase }}

    <br />

    <!-- Pipe kullanmak için | ifadesi kullanılır. Angular içerisinde hazır olarak bulunan lowercase pipenı kullanarak metinsel ifadelerde bütün veriyi küçük harfe çevirir -->
    {{ name | lowercase }}

    <br />

    <!-- Slice pipe parametreli pipelare bir örnektir. Javascripteki slice fonksiyonuna benzer bir şekilde kullanılır. Metinsel ifadeleri parçalamak için kullanılır. Pipe verilen parametreler : şeklinde belirtilerek kullanılır. -->
    {{ name | slice : 0 : 4 }}

    <br />
    <!-- Currency pipe ilgili sayısal değeri para birimi cinsinden göstermeye yarar. -->
    {{ price | currency }}

    <br />
    <!-- Currency pipe ilgili sayısal değeri para birimi cinsinden göstermeye yarar. Para birimi gösterim birimini de parametre olarak verebiliriz -->
    {{ price | currency : '₺' }}

    <br />

    <!-- date pipe nin kullanım şekilleri aşağıdaki gibidir. -->
    {{ birthdate | date }}

    <br />
    {{ birthdate | date : 'fullDate' }}
    <br />
    {{ birthdate | date : 'medium' }}
    <br />
    {{ birthdate | date : 'shortTime' }}
    <br />
    {{ birthdate | date : 'mm:SS' }}

    <br />

    <!-- json pipe Verilen bir objeyi json olarak ekranda gösterir. -->

    {{ { name: 'emre can', surname: 'ayar' } | json }}

    <br />

    <!-- Sayısal verileri yüzde işareti ile gösterir. -->
    {{ 50 | percent }}

    <br />

    <!-- Her kelimenin ilk harfini büyütür -->

    {{ 'adam sandık fos çıktı' | titlecase }}

    <br />

    {{ 'divrit divrit istavrit divrit divrit istavrit' | customPipe : 0 : 6 }}
  `,
  styleUrls: ['./pipe-component.component.scss'],
})
export class PipeComponentComponent {
  name = 'emre can';

  price = 1000;
  birthdate: Date = new Date(23, 9, 1993);
}
