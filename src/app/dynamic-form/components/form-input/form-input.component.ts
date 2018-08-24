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

  destroy$ = new Subject();
  errorMessage$ = new Subject<any>();
  errorMessage: string;

  get controlRef(): AbstractControl {
    return this.group.get(this.config.key);
  }

  get isAsync() {
    return typeof(this.config.label) !== 'string' ? true : false;
  }

  constructor(
  ) { }

  ngOnInit() {
    this.changeErrorMessage();
    this.subscribeErrorMessage();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeErrorMessage() {
    this.errorMessage$.pipe(
      takeUntil(this.destroy$),
      mergeMap(errors => {
        console.log(errors);
        const key = Object.keys(errors)[0];
        const params = errors[key];
        const value = `ERROR_MESSAGE.${key.toUpperCase()}`;
        console.log(params);
        return value;
      })
    ).subscribe(
      (message) => {
        this.errorMessage = message;
      }
    );
  }

  subscribeErrorMessage() {
    this.controlRef.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      () => {
        const errors = this.controlRef.errors;
        if (errors) {
          this.errorMessage$.next(errors);
        }
      }
    );
  }

}
