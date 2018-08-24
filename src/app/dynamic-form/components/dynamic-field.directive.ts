import { Directive, Input, OnChanges, OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../models/field-config';
import { Field } from '..//models/field';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxsComponent } from './form-checkboxs/form-checkboxs.component';
import { FormRadiosComponent } from './form-radios/form-radios.component';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  datepicker: FormDatepickerComponent,
  checkboxs: FormCheckboxsComponent,
  radios: FormRadiosComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.controlType]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.controlType}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.controlType]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
