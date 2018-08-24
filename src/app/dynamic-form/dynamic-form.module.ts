import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDatepickerComponent } from './components/form-datepicker/form-datepicker.component';
import { FormCheckboxsComponent } from './components/form-checkboxs/form-checkboxs.component';
import { FormRadiosComponent } from './components/form-radios/form-radios.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDatepickerComponent,
    FormCheckboxsComponent,
    FormRadiosComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDatepickerComponent,
    FormCheckboxsComponent,
    FormRadiosComponent
  ]
})
export class DynamicFormModule { }
