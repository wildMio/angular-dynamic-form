import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  exportAs: 'appDynamicForm',
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input()
  config: Array<FieldConfig> = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get controls() { return this.config.filter(({controlType}) => controlType !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
    this.addMoreValidation();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.key);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((key) => {
          const config = this.config.find((control) => control.key === key);
          this.form.addControl(key, this.createControl(config));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.key, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  addMoreValidation() {
    this.controls
      .filter(control => control.validationWithOther)
      .forEach(control => {
        const validations = control.validationWithOther;
        this.form.get(control.key).setValidators([...control.validation, ...validations.map(({validator, target}) => {
          return () => validator(this.form.get(target));
        })]);
        this.form.get(control.key).updateValueAndValidity();
      });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.form);
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  // setDisabled(key: string, disable: boolean) {
  //   if (this.form.controls[key]) {
  //     const method = disable ? 'disable' : 'enable';
  //     this.form.controls[key][method]();
  //     return;
  //   }

  //   this.config = this.config.map((item) => {
  //     if (item.key === key) {
  //       item.disabled = disable;
  //     }
  //     return item;
  //   });
  // }

  // setValue(key: string, value: any) {
  //   this.form.controls[key].setValue(value, {emitEvent: true});
  // }
}
