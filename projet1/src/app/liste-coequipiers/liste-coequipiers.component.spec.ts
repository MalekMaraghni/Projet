import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoequipiersComponent } from './liste-coequipiers.component';

describe('ListeCoequipiersComponent', () => {
  let component: ListeCoequipiersComponent;
  let fixture: ComponentFixture<ListeCoequipiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCoequipiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoequipiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
