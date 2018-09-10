import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-checkboxs',
  templateUrl: './form-checkboxs.component.html',
  styleUrls: ['./form-checkboxs.component.scss']
})
export class FormCheckboxsComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  get controlRef() {
    return this.group.get(this.config.key);
  }

  constructor() { }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.controlRef.setValue([]);
    this.config.toggle = !this.config.toggle;
  }

  checkCheckbox(value) {
    if (!Array.isArray(this.controlRef.value)) { return null; }
    return this.controlRef.value.some(originValue => originValue === value) ? true : false;
  }

  changeCheckbox(e, value) {
    const originValue = this.controlRef.value;
    if (e.checked) {
      this.controlRef.setValue([...originValue, value]);
    } else {
      this.controlRef.setValue(originValue.filter(ov => ov !== value));
    }
  }

}
