import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    //customers - preloading :true,
    //products - preloading : false

    if (route.data['preload'] == true) {
      return fn();
    }

    return of();
  }
}
