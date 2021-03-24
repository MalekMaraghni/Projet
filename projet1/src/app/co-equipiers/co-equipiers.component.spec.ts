import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoEquipiersComponent } from './co-equipiers.component';

describe('CoEquipiersComponent', () => {
  let component: CoEquipiersComponent;
  let fixture: ComponentFixture<CoEquipiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoEquipiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoEquipiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
