import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static valrut(propertyName: string): ValidatorFn {
    const temp: any = {};
    return (currentControl: AbstractControl) => {
      // console.log(currentControl.value);
      let suma = 0;

      const rut = currentControl.value;
      if (currentControl.value == null) {
        temp[propertyName] = true;
        return temp;
      }
      if (currentControl.value == '') {
        temp[propertyName] = false;
        return temp;
      }
      if (
        currentControl.value == '11111111-1' ||
        currentControl.value == '22222222-2' ||
        currentControl.value == '33333333-3' ||
        currentControl.value == '44444444-4' ||
        currentControl.value == '55555555-5' ||
        currentControl.value == '66666666-6' ||
        currentControl.value == '77777777-7' ||
        currentControl.value == '88888888-8' ||
        currentControl.value == '99999999-9' ||
        currentControl.value == '00000000-0'
      ) {
        temp[propertyName] = true;
        return temp;
      }
      const arrRut = rut.split('-');
      let rutSolo = arrRut[0];
      const verif = arrRut[1];
      let continuar = true;
      let i: any;
      if (verif && verif.length === 1) {
        if (!isNaN(rutSolo) && rutSolo !== '') {
          for (i = 2; continuar; i++) {
            suma += Math.trunc(rutSolo % 10) * i;
            rutSolo = rutSolo / 10;
            if (i === 7) {
              i = 1;
            }
            if (Math.trunc(rutSolo) === 0) {
              continuar = false;
            } else {
              continuar = true;
            }
          }
        }
        const resto = Math.round(suma % 11);

        const dv = 11 - resto;

        if (dv === 10) {
          if (verif !== 'K' && verif !== 'k') {
            temp[propertyName] = true;
            return temp;
          }
        } else if (dv === 11) {
          if (dv - 11 !== parseInt(verif, 0)) {
            temp[propertyName] = true;
            return temp;
          }
        } else if (dv !== 11) {
          if (dv !== parseInt(verif, 0)) {
            temp[propertyName] = true;
            return temp;
          }
        }
      } else {
        temp[propertyName] = true;
        return temp;
      }
    };
  }

  static withespace(): ValidatorFn {
    const temp: any = {};
    return (currentControl: AbstractControl) => {
      if (currentControl.value === null || currentControl.value.length === 0) {
        return null;
      }
      const isWhitespace = (currentControl.value || '').trim().length === 0;
      const isValid = !isWhitespace;

      return isValid ? null : { withespace: true };
    };
  }

  static valrutformat(propertyName: string): ValidatorFn {
    const temp: any = {};
    return (currentControl: AbstractControl) => {
      // console.log(currentControl.value);
      let suma = 0;

      const rutformat = currentControl.value;
      if (rutformat == null) {
        temp[propertyName] = true;
        return temp;
      }

      // console.log(rutformat);
    };
  }
}
