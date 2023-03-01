import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  //Pipe'in kullanıldığı değeri manipüle yani transform etmesini sağlayan fonksiyondur.
  transform(value: string, a: number, b: number): string {
    let result = value.slice(a, b);
    return result;
  }
}
