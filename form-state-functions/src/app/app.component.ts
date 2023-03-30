import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input
        type="text"
        placeholder="First Name"
        formControlName="firstName"
      /><br />
      <input
        type="text"
        placeholder="Last Name"
        formControlName="lastName"
      /><br />
      <input type="email" placeholder="Email" formControlName="email" /><br />
      <input type="tel" placeholder="Tel" formControlName="tel" /><br />
      <div formGroupName="address">
        <input
          type="text"
          placeholder="Country"
          formControlName="country"
        /><br />
        <input type="text" placeholder="City" formControlName="city" /><br />
        <input
          type="textarea"
          placeholder="Address Text"
          formControlName="addressText"
        /><br />
      </div>
      <button>Submit</button>
    </form>

    <button (click)="markAsTouched()">markAsTouched</button>
    <button (click)="markAllAsTouched()">markAllAsTouched</button>
    <button (click)="markAsUnTouched()">markAsUnTouched</button>
    <button (click)="markAsDirty()">markAsDirty</button>
    <button (click)="markAsPristine()">markAsPristine</button>
    <button (click)="disable()">disable</button>
    <button (click)="enable()">enable</button>

    <br />
    Form touched : {{ frm.touched }} <br />
    FirstName touched : {{ frm.get('firstName').touched }} <br />

    Form dirty : {{ frm.dirty }} <br />
    FirstName dirty : {{ frm.get('firstName').dirty }} <br />

    Form Pristine : {{ frm.pristine }} <br />
    FirstName Pristine : {{ frm.get('firstName').pristine }}
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-state-functions';

  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      firstName: [''],
      lastName: [],
      email: [''],
      tel: [''],
      address: formBuilder.group({
        country: [''],
        city: [''],
        addressText: [''],
      }),
    });
  }

  onSubmit() {
    console.log(this.frm.value);
  }

  //Bu fonksiyon çalıştığında formun touch özelliği tetiklenir.
  markAsTouched() {
    this.frm.markAsTouched(); // Formun touched özelliğini değiştirir.
    this.frm.get('firstName').markAsTouched({ onlySelf: true }); //Burası da sadece firstName alanının state ni değiştirir.
  }

  //Bu fonksiyonda markAsTouched fonksiyonunda olduğu gibi kontrolün ve o kontrolün altındaki tüm kontrollerin touched özelliğinin değerini true olarak değiştirecektir.
  markAllAsTouched() {
    this.frm.get('address').markAllAsTouched(); //Adres objesi ve onun altındaki bütün değerleri touched olarak değiştirir. Fakat formun kendisi için olan state i değiştirmez.
  }

  //Bu fonksiyon ile tetiklenen form yahut form kontrolünün touched özelliği false olarak ayarlanacaktır. İlgili yapının dokunulmadığına dair programatik dokunuşlar yapılırken tercih edilir.
  markAsUnTouched() {
    this.frm.get('firstName').markAsUntouched(); // İlgili form control nesnesinin touched durumunu false yapacaktır. Fakat forma karışmayacaktır.
  }

  //Bu fonksiyon ile ilgili formun yahut form kontrolünün 'dirty' değeri programatik olarak doldurulur.
  //(dirty => Bir formun içerisinde touched olan alanın içerisine bir şeyler girilmisse bu alan true olarak bizlere döner.)
  markAsDirty() {
    this.frm.markAsDirty();
  }

  //Bu fonksiyon ile ilgili formun yahut form kontrolünün 'pristine' değerini true olarak değiştirmemizi sağlamaktır. Böyle sanki ilgili forma hiç dokunulmamış yani formda bir çalışma yapılmamış mahiyetinde bir çalışma gerçekleştirilebilir.
  markAsPristine() {
    this.frm.markAsPristine();
  }

  //Kullanılan formun yada form kontrolünün devre dışı kalmasını sağlar.
  disable() {
    this.frm.get('firstName').disable();
  }

  //Kullanıldığı formu'n yahut form kontrolünün aktifleştirilmesini sağlar.
  enable() {
    this.frm.get('firstName').enable();
  }
}
