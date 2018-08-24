import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxsComponent } from './form-checkboxs.component';

describe('FormCheckboxsComponent', () => {
  let component: FormCheckboxsComponent;
  let fixture: ComponentFixture<FormCheckboxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCheckboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
