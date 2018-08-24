import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  get isAsync() {
    return typeof(this.config.label) !== 'string' ? true : false;
  }

  constructor() { }

  ngOnInit() {
  }

}
