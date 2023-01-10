import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/*
@Directive({
  selector: '[appPriceValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PriceValidatorDirective, multi: true }]
})
export class PriceValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {

    var isValid = false;
    const price = control.get('price');

    if(price != null){
      isValid = price.value > 0
    }

    return isValid  ? { identityRevealed: true } : null;

  }
}
*/

export const PriceValidatorDirective: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  var isValid = false;
  const price = control.get('price');

  if (price != null) {
    isValid = price.value > 0;
  }

  return isValid ? { identityRevealed: true } : null;
};
