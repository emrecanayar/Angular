// Burada form için customValidators leri yazacağımız bir sınıf oluşturduk.

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Parametresiz bir custom validator fonksiyonu
export function capitalLetterValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const ascii: string[] = [];
  for (let n = 65; n <= 90; n++) ascii.push(String.fromCharCode(n));

  if (ascii.indexOf(value[0]) == -1) {
    return { capitalLetter: true };
  }

  return null;
}

//Parametreli bir custom validator fonksiyonu
export function capitalLetterValidatorParameter(count: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const ascii: string[] = [];
    for (let n = 65; n <= 90; n++) ascii.push(String.fromCharCode(n));

    let state: boolean = true;
    for (let c = 0; c < count; c++) {
      if (ascii.indexOf(value[0]) == -1) {
        state = false;
        break;
      }
    }

    if (!state) {
      return { capitalLetter: true };
    }

    return null;
  };
}

//Girilen şifreleri eşleştirme validasyonu
export function matchPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.get('password').value;
    const passwordConfirm: string = control.get('passwordConfirm').value;

    if (password != passwordConfirm) {
      return { noMatch: true };
    }

    return null;
  };
}
