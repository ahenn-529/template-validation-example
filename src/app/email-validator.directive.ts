import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

import { Directive } from '@angular/core';
import { Va529Email } from '@virginia529/validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('got value: ', control.value);
    return Va529Email.validate()(control);
  }
}
