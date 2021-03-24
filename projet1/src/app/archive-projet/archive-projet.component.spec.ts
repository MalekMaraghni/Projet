import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProjetComponent } from './archive-projet.component';

describe('ArchiveProjetComponent', () => {
  let component: ArchiveProjetComponent;
  let fixture: ComponentFixture<ArchiveProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
