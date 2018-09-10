import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  get controlRef() {
    return this.group.get(this.config.key);
  }

  constructor() { }

  ngOnInit() {
  }

}
