import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  ResolveFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

//CanActivateGuard ın yeni nesil tanımlanma şekli bunun için CanActivateFn fonksiyonu kullanarak bu işlemi gerçekleştiriyoruz.
/*
CanActivate Guard'ı, bir route'a erişim izni vermeden önce belirli koşulların sağlanıp sağlanmadığını kontrol eder. Örneğin, kullanıcıların yetkili olup olmadığını veya oturum açmış olup olmadığını denetlemek için kullanılabilir.

*/
export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  //...
  //...
  console.log('CanActivate Guard Tetiklendi.');
  return true;
};

/* 
CanActivateChild fonksiyonu, Angular uygulamalarında kullanılan bir diğer Guard türüdür. Bu Guard, bir route'un çocuk (child) route'larına erişim izni vermeden önce belirli koşulların sağlanıp sağlanmadığını kontrol eder. Bu, özellikle kullanıcıların belirli alt sayfalara erişimine sınırlamalar getirmek istediğiniz durumlar için kullanışlıdır.

*/

export const canActivateChildGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  //...
  //...
  console.log('CanActivateChild Guard Tetiklendi.');
  return true;
};

/*

CanDeactivate fonksiyonu, Angular uygulamalarında kullanılan başka bir Guard türüdür. Bu Guard, kullanıcıların mevcut route'tan başka bir route'a geçmeden önce belirli koşulların sağlanıp sağlanmadığını kontrol eder. Bu, kullanıcıların belirli koşullar altında sayfayı terk etmelerini önlemek için kullanılabilir, örneğin; veri kaybını önlemek veya kullanıcıların yanlışlıkla yaptıkları değişikliklerden kaçınmak için.

Yani kullanıcı belirlenen path üzerinden ayrılmak istediğinde burası çalışır.

*/

export const canDeactiveGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  //...
  //...
  console.log('CanDeactivate Guard Tetiklendi.');
  return true;
};

/*
Resolve fonksiyonu, Angular uygulamalarında kullanılan bir Guard türüdür. Resolve Guard'ı, bir route'a yönlendirme yapılmadan önce bazı verilerin önceden yüklenmesini sağlar. Bu, özellikle API çağrıları gibi asenkron işlemlerle veri almanız gereken durumlar için kullanışlıdır. Route'a yönlendirme yapmadan önce gerekli verilerin hazır olmasını sağlayarak, kullanıcı deneyimini geliştirebilir ve istemcinin daha hızlı tepki vermesini sağlayabilirsiniz.

Kısacası ilgili sayfa tam yüklenmeden oraya geçiş sağlanmayacaktır. Başka bir deyişle yönlenmek istediğimiz sayfada veriler tam hazır olamadan tıklasak bile hemen oraya geçiş yapmayacağız. Yönlenmek istediğimiz sayfadaki her şey hazır olduğunda sayfaya yönlenme işlemi tamamlanacaktır.

*/
export const resolveGuard: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  //...
  //...
  const httpClient = inject(HttpClient); //Fonksiyonlar içerisine inject işlemleri bu şekilde inject metodu ile gerçekleştirilebilir.
  return httpClient.get('https://jsonplaceholder.typicode.com/photos'); //Guard içerisindeki HttpClient işlemleri için subscribe olmamamız gerekiyor. Observable olarak bırakmalıyız.
};

/*

CanMatch guardı bu guard içerisine yapmış olduğumuz business işlemlerine göre eğer true dönerse ayrı bir componente false dönerse farklı bir componenete yönlendirme işlemi gerçekleştirebilir.

Örneğin, bir kullanıcının sadece giriş yapmış kullanıcılar tarafından erişilebilen bir sayfaya erişmesine izin vermek istediğinizi varsayalım. Bu durumda, "CanMatch" guard ile ilgili rotanın URL kalıbını belirleyebilir ve sadece giriş yapmış kullanıcıların bu rotaya erişmesine izin verebilirsiniz. Giriş yapmamış kullanıcılarıda login sayfasına yönlendirebiliriz. Bunun gibi düşünebilirsiniz.

*/

export const isAdminGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  //...
  //...

  return !!localStorage.getItem('admin');
};

export const isUserGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  //...
  //...

  return !!localStorage.getItem('user');
};

// Guardların çalışma sırası şu şekildedir.
/*
1.) CanMatch
2.) CanActivate
3.) Resolve
4.) CanDeactivate

*/