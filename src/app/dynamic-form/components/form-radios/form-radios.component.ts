import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radios',
  templateUrl: './form-radios.component.html',
  styleUrls: ['./form-radios.component.scss']
})
export class FormRadiosComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  get controlRef() {
    return this.group.get(this.config.key);
  }

  constructor() { }

  ngOnInit() {
  }

  isAsync(label) {
    return typeof(label) !== 'string' ? true : false;
  }

}
