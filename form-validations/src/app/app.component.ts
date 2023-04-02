import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {
  capitalLetterValidator,
  capitalLetterValidatorParameter,
  matchPassword,
} from './validators/func';

/**

Validation'lar form üzerindeki veri alanlarını kullanıcılar tarafından beklenen kurallara girilip, girilmediğini kontrol etmemizi sağlayan doğrulayıcılardır.

Angular mimarisinde validation ları iki ana başlık altında inceleyebiliriz.

async ve sync olmak üzere iki başlık altında işleyebiliriz.

sync => Kullanıcı tarafından girilen değer kontrol edilir ve anında değer döndürülür.

async => Kullanıcı tarafından girilen değer back-end tarafına gönderilir ve orada işlendikten sonra sonuç döndürülür.

İşte bu tarz ihtiyaçlara göre biz validation işlemlerimizi kurgulayabiliriz.

Angular içerisinde built-in gelen yani hazır gelen validationlar aşağıdaki gibidir.

min => Değerin sağlanan sayıdan büyük veya eşit olmasını gerektiren validator.
max => Değerin sağlanan sayıdan küçük veya eşit olmasını gerektiren validator.
required => Kontrolün değerinin girilmesini zorunlu kılan validator.
requiredTrue => Kontrolün değerinin true olmasını gerektiren validator. Genellikle checkBox lar için kullanılır.
email => Değerin email formatına uygun olup olmadığını kontrol eden validator.
minLength & maxLength => Metinsel değerlerde karakter sınırını belirleyen validator.

Yukarıdaki validator yapılarına Validators denilen sınıf üzerinden erişebiliriz.


Form yapılandırılmalarının doğrulama süreçlerinde eğer hata varsa kullanıcıları kısa ve anlamlı bir şekilde bu hatalara dair mesajların verilmesi gerekmektedir.

Bunun için FormControl nesnelerinin errors property'sinden istifade edebilirsiniz.

 */
@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input
        type="text"
        formControlName="firstName"
        placeholder="First Name"
      /><br />
      <div *ngIf="!firstName.valid && (firstName.dirty || firstName.touched)">
        {{ firstName.errors | json }}
      </div>
      <br />
      <input
        type="text"
        formControlName="lastName"
        placeholder="Last Name"
      /><br />
      <div *ngIf="!lastName.valid && (lastName.dirty || lastName.touched)">
        {{ lastName.errors | json }}
      </div>
      <br />
      <input type="email" formControlName="email" placeholder="Email" /><br />
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        {{ email.errors | json }}
      </div>
      <br />
      <button>Submit</button>
    </form>
    <div></div>
    <form [formGroup]="pass" (ngSubmit)="confirmPassword()">
      <input
        type="password"
        formControlName="password"
        placeholder="Password"
      /><br />
      <input
        type="password"
        formControlName="passwordConfirm"
        placeholder="Confirm Password"
      /><br />
      <div
        *ngIf="
          !passwordConfirm.valid &&
          (passwordConfirm.dirty || passwordConfirm.touched)
        "
      >
        {{ pass.errors | json }}
      </div>
      <br />
      <button>Ok</button>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-validations';

  frm: FormGroup;
  pass: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formPasswordBuilder: FormBuilder
  ) {
    this.frm = formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3)],
        capitalLetterValidator,
      ],
      lastName: ['', Validators.required, capitalLetterValidatorParameter(3)],
      email: ['', [Validators.email, Validators.required]],
    });

    //Direkt olarak formun validasyonu için aşağıdaki gibi bir işlem yapmamız gerekmektedir. Burada dikkat etmemiz gereken durum formun içerisindeki bir kontrolü değil, tümüyle formun validasyonu için uygulanacak bir validasyon durumudur. Yani formu komple ilgilendiren ve içerisindeki her şeyi kapsayan validasyon türüdür.
    this.pass = formPasswordBuilder.group(
      {
        password: [''],
        passwordConfirm: [''],
      },
      { validators: [matchPassword()] } //formu komple ilgilendiren validasyonları bu şekilde vermeliyiz.
    );
  }

  //Templaten daha rahat erişebilmek adına formController i burada aşağıdaki gibi tanımlıyoruz.
  get firstName() {
    return this.frm.get('firstName');
  }

  get lastName() {
    return this.frm.get('lastName');
  }

  get email() {
    return this.frm.get('email');
  }

  get password() {
    return this.pass.get('password');
  }

  get passwordConfirm() {
    return this.pass.get('passwordConfirm');
  }

  onSubmit() {
    console.log(this.frm.value);
    console.log(this.frm.valid);
  }

  confirmPassword() {
    console.log(this.pass.value);
    console.log(this.pass.valid);
    console.log(this.pass.errors);
  }
}
