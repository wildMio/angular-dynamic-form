import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export interface FieldConfig {
  key: string;
  controlType: 'input' | 'select' | 'datepicker' | 'checkboxs' | 'radios' | 'button';
  // name: string;
  disabled?: boolean;
  label?: string | Observable<string>;
  options?: Array<{value: any, label: string | Observable<string>}>;
  placeholder?: string;
  inputType?: string;
  validation?: Array<ValidatorFn>;
  validationWithOther?: Array<{validator: ValidatorFn, target: string}>;
  value?: any;
  toggle?: boolean;
}
