import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `Example <br />
    <ng-content></ng-content> `,
})
export class ExampleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  @Input() data: string = '';

  //ngOnChanges metodu yada eventinin çalışması için ilgili componentin OnChanges interface inden implement edilmesi gerekmektedir.
  // Ayrıca bu eventin tetiklenebilmesi için bu compnent içerisinde tanımlanan input değişkenkerin componentin selector inin tanımladığı yerden değiştirilmesi gerekmektedir. Bu metot anca o zaman tetiklenip çalışacaktır.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1.ngOnChanges');
  }

  //ngOnInit metodu yada eventinin çalışması için iligli componentin OnInit interface inden implement edilmesi gerekmektedir.
  // Bu event sayfa ilk yüklediğinde çalışacak olan işlemleri içerisinde barındırır. Yani react te var olan componentDidMount fonksiyonu veya useEffect hooku gibi düşünebiliriz.
  ngOnInit(): void {
    console.log('2.ngOnInit');
  }

  //ngDoCheck metodu yada eventinin çalışması için iligli componentin DoCheck interface inden implement edilmesi gerekmektedir.
  // Bu event componentin güncellenmesi durumunda sık sık bu metot tetiklenmektedir. Örnek olarak component üzerinde bir input olduğunu düşünürsek biz bunun içerisine yazdığımız yada uyguladığımız her bir harf değişikliğinde bu metot tetiklenmiş olur.
  ngDoCheck(): void {
    console.log('3.ngDoCheck');
  }

  //ngAfterContentInit metodu yada eventinin çalışması için iligli componentin AfterContentInit interface inden implement edilmesi gerekmektedir.
  //ngAfterContentInit fonksiyonun tetiklenmesi için ilgili componentin selector adıyla sanki bir etiketmiş gibi kullanıldığı yerde etikelerin arasında girdiğimiz bir değer olursa işte orası componentin contetntidir ve oraya girilen her değer bu componenti otomatik olarak tetikler.
  ngAfterContentInit(): void {
    console.log('4.ngAfterContentInit');
  }

  //ngAfterContentChecked metodu yada eventinin çalışması için iligli componentin AfterContentChecked interface inden implement edilmesi gerekmektedir.
  //ngAfterContentChecked fonksiyonun tetiklenmesi için ilgili componentin var olan contetinin değiştirilmesi yada güncellenmesi gerekmektedir.
  ngAfterContentChecked(): void {
    console.log('5.ngAfterContentChecked');
  }

  //ngAfterViewInit metodu yada eventinin çalışması için iligli componentin AfterViewInit interface inden implement edilmesi gerekmektedir.
  //ngAfterViewInit fonksiyonun tetiklenmesi için ilgili component içerisinde yer alan templatein yüklemesinden sonra çalışmasını istediğimiz bir olay varsa onu burada kodluyoruz.
  ngAfterViewInit(): void {
    console.log('6.ngAfterViewInit');
  }

  //ngAfterViewChecked metodu yada eventinin çalışması için iligli componentin AfterViewChecked interface inden implement edilmesi gerekmektedir.
  //ngAfterViewChecked fonksiyonun tetiklenmesi için ilgili component içerisinde yer alan templatein güncellemesi durumunda tetiklenecek olan fonksiyondur.
  ngAfterViewChecked(): void {
    console.log('7.ngAfterViewChecked');
  }

  
  //ngOnDestroy metodu yada eventinin çalışması için iligli componentin OnDestroy interface inden implement edilmesi gerekmektedir.
  //ngOnDestroy fonksiyonun tetiklenmesi için ilgili componentin kaldırılması/silinmesi/imhasının gerçekleştirilmesi gerekmektedir. Örnek olarak uygulamada bir componenti başka bir componente yönlendiriken yönlendirme işlemi gerçekleştikten sonra ilk component imha edilir işte tam o sırada çalışmasını istediğimiz işlemlerimizi burada kodluyor olacağız.
  ngOnDestroy(): void {
    console.log('8.ngAfterViewChecked');
  }

}
