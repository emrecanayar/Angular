import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  // templateUrl: './custom-directive.component.html',
  template: ` <div appExample color="blue">selam</div> `,
  styleUrls: ['./custom-directive.component.scss'],
})
export class CustomDirectiveComponent {
  /**
   *  #Directive Oluşturma
   *  ng generate directive ... ya da ng g d şeklinde bir directive olarak oluşturulur.
   *  Bir directive oluşturulduğu zaman ana modüle declare edilmelidir. Yani import edilmelidir.
   *  Bir directive'in sınıf adının sonunda Directive olması isimsel bir kültürdür. Zorunlu değildir fakat community olarak bu şekilde kullanılır.
   * Bir Directive'in directive olabilmesi için @Directive decoreator'ı tarafından işaretlenmesi gerekmektedir.
   *
   *
   * #Directive İle işaretlenmiş Html nesnesini elde etme
   *
   * example.directive.ts dosyasına bakabilirsin.
   *
   *
   * # Directive 'e parametre tanımlama
   * Directive üzerinde parametre tanımayabilmek için Input field tanımlamak yeterlidir.
   *
   *
   * #HostListener
   *
   * Oluşturulan directive'in hangi event ile görevlendirdiğimizi belirlememizi sağlayan bir decoratordur. (Örnek olarak directive atanmış bir nesneye tıklandığında ne olsun istediğimizi belirtmek gibi.)
   * 
   * 
   * #HostBinding özelliği
   * Direvtive in işaretlediği DOM nesnesinin bir özelliğie bind olarak işlemler gerçekleştirebiliyoruz. 
   *
   */
}
