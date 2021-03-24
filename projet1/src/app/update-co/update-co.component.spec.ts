import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoComponent } from './update-co.component';

describe('UpdateCoComponent', () => {
  let component: UpdateCoComponent;
  let fixture: ComponentFixture<UpdateCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
