import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    Valid : {{ frm.valid }}
  `,
  styleUrls: ['./app.component.scss'],
})

/*
Model-driven-forms yaklaşımında biz formun yönetimi daha çok class tarafında yapıyoruz. Detaylı bilgi için aşağıdaki yapıları inceleyebilirsiniz.
*/

/*
Reactive(Model) Driven Forms yapısını kullanmak için gerekli olan adımlar şunlardır
1.) Öncelikle componentin bulunduğu ana module gidip ReactiveFormsModule ü import etmeniz gerekmektedir.
2.) Ardından oluşturulacak olan formun öncelikli modelini oluşturunuz ve gerekli FormController'leri tanımlayınız. Bunun için FormBuilder nesnesinden istifade edebiliriz.
3.) Devamında ise html kısmında formu bütünsel olarak tasarlayınız ve form etiketini formGroup directive'i ile oluşturulan model 'e form kontrollerini ise modeldeki ilgili FormControl'lerine formControlName directive aracılığıyla bağlayınız. (binding)
4.) Formu gönderebilmek için artık ngSubmit eventine bir fonksiyon oluşturmamız gerekmektedir.
*/

/*
formGroupName
Birden fazla form nesnesini gruplayarak erişmek istiyorsak o zaman bu directi vi kullanıyoruz. Grupladığımız bu yapılara tek tek erişim işlemler yapmaktansa grup olarak erişip eriştiğimiz bu grupta işlemler yaptığımızda bu grup içerisinde yer alan bütün form elemanlarına yaptığımız işlem uygulanır.

Hatta json yapısında iç içe obje oluşturmaya da yarar. Oldukça güzel ve faydalı bir özelliktir.

*/
export class AppComponent {
  //Reactive (Model Driven Forms) Form yapılanması için gerekli olan adımlar.

  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      firstName: ['Emre Can'], //Form yüklenirken ilk değerleri direkt olarak bu şekilde verebiliriz.
      lastName: ['', Validators.required], //Form üzerindeki validasyon işlemlerini bu şekilde gerçekleştirebiliriz.
      email: [''],
      tel: ['', [Validators.required, Validators.maxLength(10)]], //Birden fazla validasyon işlemi için bu şekilde yapıyoruz.
      //İkinci bir objeyi veya başka bir deyişle formGroupName i bu şekilde yapılandırırken tekrardan formBuilder.group kullanarak yapılandırmamız ve tanımlamamız gerekmektedir.
      address: formBuilder.group({
        country: [''],
        city: [''],
        addressText: ['Deneme Adres'],
      }),
    });

    //Formdaki kontrolerden birinin değeri değiştiğinde fırlatılır.
    this.frm.valueChanges.subscribe({
      next: (data) => {
        console.log('Value Changes=> ', data);
      },
    });

    //Peki formun içerisindeki spesifik bir eleman üzerinde bir değer değişimi olduğunda bunu nasıl kontrol edebiliriz.
    this.frm.get('firstName').valueChanges.subscribe({
      next: (data) => {
        console.log('Spesific Value Changes =>', data);
      },
    });

    //Formun geçerlilik durumu değiştirildiğinde fırlatılır.
    this.frm.statusChanges.subscribe({
      next: (data) => {
        console.log('Status Changes=> ', data);
      },
    });
  }

  onSubmit() {
    console.log(this.frm.value);
  }
}
