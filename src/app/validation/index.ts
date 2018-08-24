import { ValidatorFn } from '@angular/forms';
import { atLeastOne } from './at-least-one/validator';

export const CustomValidators: {[propName: string]: ValidatorFn} = {
  atLeastOne
};
