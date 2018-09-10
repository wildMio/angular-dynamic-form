import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';
import { Subject, Subscription } from 'rxjs';
import { map, mergeMap, tap, shareReplay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit, OnDestroy {
  config: FieldConfig;
  group: FormGroup;

  get controlRef(): AbstractControl {
    return this.group.get(this.config.key);
  }

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
