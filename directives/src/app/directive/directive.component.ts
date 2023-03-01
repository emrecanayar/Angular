import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  // templateUrl: './directives.component.html',
  template: `
    <ul>
      <!-- ngFor directivinin bir html nesnesi üzerindeki kullanımı aşağıdaki gibidir. ;index as i dedikten sonra iligli elemanın index numarasını elde edebiliriz. -->
      <li *ngFor="let name of names; index as i">{{ name }} - {{ i }}</li>
    </ul>

    <!-- ngFor ile beraber kullanılan diğer yapılara aşağıdaki alanda bir göz atalım. -->
    <!--
index : index numarasını verir.
first : Eğer ilgili veri ilk sırada ise true döner değilse false döner.
last : Eğer ilgili veri son sırada ise true döner değilse false döner.
even : Eğer ilgili verinin index numarası çift ise true döner değil ise false döner.
odd : Eğer iligli veririnin index numarası tek ise true döner değilse false döner.


     -->
    <div
      *ngFor="
        let name of names;
        let i = index;
        let isFirst = first;
        let isLast = last;
        let isEven = even;
        let isOdd = odd
      "
    >
      {{ name }} {{ i }} {{ isFirst }} {{ isLast }} {{ isEven }} {{ isOdd }}
    </div>

    <!-- ngIf kullanımına bir örnek -->
    <div *ngIf="visible">
      NgIf sayesinde burası gösterilecek yada kapatılacak.
    </div>

    <!-- ngIf kullanımına bir örnek If else mantığonda da aşağıdaki kullanabiliriz. -->
    <div *ngIf="visible2;else elseContent">
      NgIf sayesinde burası gösterilecek yada kapatılacak. If Else mantığında da
      kullanım yapabiliriz.
    </div>
    <ng-template #elseContent>
      NgIf de else olduğunda gösterilecek olan alan.
    </ng-template>
    

    <!-- ng-Switch directivine bir örnektir. -->

    <div [ngSwitch]="sayi">
    <p *ngSwitchCase="1">
    Sayi 1
    </p>
    <p *ngSwitchCase="2">
    Sayi 2
    </p>
    <p *ngSwitchCase="3">
    Sayi 3
    </p>
    <p *ngSwitchDefault>
    Sayı Yok
    </p>
    </div>

    <!-- ngClass directivinin kullanımı. Css classlarını eklemeye yarar. -->
    <input type="text" [ngClass]="cl"/>
<br>
  <!-- ngStyle directivenin kullanımı. Html i belirtilen css kodları ile manipüle etmeye yarar. -->
  <input type="text"  [ngStyle]="style"/>
  `,

  // styleUrls: ['./directives.component.scss'],
  styles:[".myClass{background-color:red}"]
})
export class DirectiveComponent {
  // *ngFor directive kullanımı için gerekli olan bir örnek oluşturudk. İşlevi JavaScripte teki for foreach döngüsüne benzer bir yapıya sahiptir. Kullanımı için template içerisinde yer alan alana bakabiliriz.
  names: string[] = ['Emre Can', 'Büşra', 'Mert Can', 'Yaren', 'Miran'];

  //*ngIf directive kullanımı için gerekli olan bir örnek oluşturduk.
  visible: boolean = true;

  visible2: boolean = false;

  // [ngSwitch] directive if else if else mantığında çalışacak olan algoritmaların kullanımı için oldukça kullanışlı bir directivedir. Template kısmında bunun için bir örnek bulabiliriz.

  sayi:number = 3;


  //[ngClass] directive bu direktif css de oluşturulan classları templete içeriisnde yer alan html elementlerine verilmek üzere kullanılır. Burada yukarıda yer alan styles alanına da dikkat edelim.

  cl:String = "myClass";

  //[ngStyle] directive kullanımı da ngClass kullanıma benzer. Akraba gibidirler. İkiside html elemenletine css özellikleri kazandırmak için oluşturulmuştur.

  style:any = {
    'background-color':'red',
    'color':'white',
    'font-size':'12px'
  }
}
