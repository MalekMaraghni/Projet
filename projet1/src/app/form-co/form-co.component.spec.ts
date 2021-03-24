import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoComponent } from './form-co.component';

describe('FormCoComponent', () => {
  let component: FormCoComponent;
  let fixture: ComponentFixture<FormCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
