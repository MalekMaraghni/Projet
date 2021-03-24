import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTacheComponent } from './archive-tache.component';

describe('ArchiveTacheComponent', () => {
  let component: ArchiveTacheComponent;
  let fixture: ComponentFixture<ArchiveTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
