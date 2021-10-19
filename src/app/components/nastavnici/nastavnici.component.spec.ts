import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavniciComponent } from './nastavnici.component';

describe('NastavniciComponent', () => {
  let component: NastavniciComponent;
  let fixture: ComponentFixture<NastavniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastavniciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
