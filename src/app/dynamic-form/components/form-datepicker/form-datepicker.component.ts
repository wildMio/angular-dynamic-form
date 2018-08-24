import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss']
})
export class FormDatepickerComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  get controlRef() {
    return this.group.get(this.config.key);
  }

  get isAsync() {
    return typeof(this.config.label) !== 'string' ? true : false;
  }

  constructor() { }

  ngOnInit() {
  }

}
