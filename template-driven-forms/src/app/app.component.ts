import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

/*
Template-driven-forms yaklaşımında biz formun yönetimi daha çok html tarafında gerçekleştiriyoruz. Genel yapı hakkında bilgi edinebilmek için aşağıdaki yapıyı inceleyebilirsiniz.
*/

/*
Template Driven Forms yapısını kullanmak için gerekli olan adımlar şunlardır
1.) Öncelikle componentin bulunduğu ana module gidip FormsModule ü import etmeniz gerekmektedir.
2.) Yukarıdaki tanımlayamı yaptıktan sonra formu template driven form olarak kullanmak iştiyorsak formu ngForm olarak işareliyoruz. Daha sonra çalışmak istediğimiz input alanlarınıda ngModel olarak işaretliyoruz.
3.) Bu adımları tamamladıktan sonra artık geriye submit olayını tetikledikten sonra hangi fonksiyonu çalıştıracaksak onu belirteceğiz. (ngSubmit) Buna karşılık gelen AppComponent içerisinde bir fonksiyon oluşturuyoruz ve formdaki nesneleri göndermek için frm.value değerini parametre olarak göndermemiz gerekmektedir.

4.) Form üzerinde unutulmaması gereken olaylardan biri de tanımlanan yapılar üzerinde name attribute nun kesinlikle tanımlanması gerektiğidir. Çünkü kullanıcı tarafından girilen değerler bu name değerleri vasıtasıyla ilgili fonksiyona aktarılır.
*/

/*
ngForm Directive Detayları
value => FormGroup içerisindeki her FormControl nesnesinin değerini döndürür.
valid => Form geçerli ise true geçerli değilse false değerini döndürür.
touched => Kullanıcı form üzerinde en az bir alana değer girdiyse true olarak döner. Aksi taktirde false değerini döndürür.
Submitted => Form submit edildiği taktirde true değerini döndürür.

*/

/*
ngModelGroup

Birden fazla form nesnesini gruplayarak erişmek istiyorsak o zaman bu directi vi kullanıyoruz. Grupladığımız bu yapılara tek tek erişim işlemler yapmaktansa grup olarak erişip eriştiğimiz bu grupta işlemler yaptığımızda bu grup içerisinde yer alan bütün form elemanlarına yaptığımız işlem uygulanır.

Hatta json yapısında iç içe obje oluşturmaya da yarar. Oldukça güzel ve faydalı bir özelliktir.

*/
@Component({
  selector: 'app-root',
  template: `
    <!-- Basit bir form örneği oluşturduk. -->
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        ngModel
      /><br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ngModel
      /><br />
      <input type="email" name="email" placeholder="Email" ngModel /><br />
      <input type="tel" name="phone" placeholder="Phone" /><br />

      <div ngModelGroup="address">
        <input type="text" name="country" placeholder="Country" ngModel />
        <br />
        <input type="text" name="city" placeholder="City" ngModel /> <br />
        <input
          type="text"
          name="addressText"
          placeholder="Address Text"
          ngModel
        />
        <br />
      </div>
      <button>Send</button>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template-driven-forms';

  //Formdan gelecek olan verileri almamıza yararyan fonksiyondur.
  // onSubmit(data: any) {
  //   console.log(data);
  // }

  //Formdaki verileri almanın bir başka yolu daha var. Buda ViewChild ile mümkündür dilerseniz ViewChild ile neler yapabiliyoruz bunlara da bir değinelim. ViewChild özetle şu işe yarar. AppCompnent classında formu bu şekilde de elde edebiliriz.

  @ViewChild('frm', { static: true }) frm: NgForm;

  //Formun elemanlarına ilk değerleri şu şekilde atıyabiliriz yada başka bir deyişle formun içerisinde bulunan yapıların sayfa yüklendiğinde dolu gelmesini istiyorsak aşağıdaki gibi işlemler ile bunu halledebiliriz.

  //Sayfa ilk yüklendiğinde çalışmasını istediğimiz işleri ngOnInit fonksiyonu içerisinde gerçekleştiriyoruz.

  ngOnInit(): void {
    setTimeout(() => {
      //Sayfa ilk yükledikten 200 ms saniye sonra forma değerleri ata. Çünkü form hemen yüklenmemeiş olabilir. Olmayan bir şeyin değerinde bu şekilde atayamassınız. Bu sebepten bu şekilde bir kontrol mekanizması önlemi almış bulunmaktayız.
      this.frm.setValue({
        firstName: 'Emre Can',
        lastName: 'Ayar',
        email: 'emrecan.ayar@hotmail.com',
        address: {
          country: 'Türkiye',
          city: 'İstanbul',
          addressText: 'Ayazağa Mahallesi',
        },
      });
    }, 200);

    //Peki form içerisinde bulunan tek bir alana bir değer atama işlemi yapmak istersek o zaman da aşağıdaki gibi bir yol izlemeyeliyiz.

    setTimeout(() => {
      this.frm.controls['firstName'].setValue('Miran');
    }, 300);

    //Peki sadece belirli bir kısmına değer atamak istiyorsak ne yapmamız gerekiyor. İşte o zamanda patchValue fonksiyonunu kullanmamız gerekmektedir.

    setTimeout(() => {
      this.frm.control.patchValue({
        address: {
          country: 'Türkiye',
          city: 'Trabzon',
          addressText: 'Kanuni Ortahisar',
        },
      });
    }, 200);
  }

  //Formdan gelecek olan verileri alacak olan fonksiyonu bu şekilde de konfigure edebiliriz.
  onSubmit(data: { firstName: string; lastName: string; email: string }) {
    console.log(`Value : ${this.frm.value.firstName}`);
    console.log(`Valid : ${this.frm.valid}`); //Formun valid mi değil mi validasyon bilgisini buradan alabiliriz. Yukarıdaki formda bir validasyon tanımlamadığımız için şimdilik true dönecektir.
    console.log(`Touched : ${this.frm.touched}`); //Kullanıcı formdan herhangi bir nesneye giriş yaptı mı yapmadı mı.
    console.log(`Submitted : ${this.frm.submitted}`); //Form submitted oldu mu olmadı mı;
    console.log(`${data.firstName} ${data.lastName} ${data.email}`);
    console.log(data);
    //form resetlemek için kullanılan fonksiyonlar aşağıdaki gibidir.
    this.frm.reset();
    this.frm.resetForm();
    this.frm.onReset();
  }
}
