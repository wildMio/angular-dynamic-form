import { Component } from '@angular/core';
import { FieldConfig } from './dynamic-form/models/field-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  controlType: 'input' | 'select' | 'datepicker' | 'checkboxs' | 'radios' | 'button';
  config: Array<FieldConfig> = [{
    key: 'name',
    controlType: 'input',
    label: '名字'
  }, {
    key: 'gender',
    controlType: 'select',
    label: '性別',
    options: [{value: 'male', label: '男'}, {value: 'female', label: '女'}]
  }, {
    key: 'today',
    controlType: 'datepicker',
    label: '好日子'
  }, {
    key: 'music',
    controlType: 'checkboxs',
    label: '音樂',
    options: [{value: 'metal', label: '金屬'}, {value: 'soft', label: '輕音樂'}]
  }, {
    key: 'dream',
    controlType: 'radios',
    label: '還有夢嗎',
    options: [{value: 'yes', label: 'GOGO!'}, {value: 'find', label: '尋找'}]
  }, {
    key: 'submit',
    controlType: 'button',
    label: '送出'
  }];

  showData(data) {
    console.log(data);
  }
}
