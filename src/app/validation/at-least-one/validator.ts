import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const atLeastOne = (targetControl: AbstractControl): ValidatorFn => {
  let subscribe = false;

  return (control: AbstractControl): ValidationErrors | null => {
    if (!subscribe) {
      subscribe = true;
      targetControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v = control.value;

    return (targetControl.value || v) ? null : {atLeastOne: true};
  };
};
