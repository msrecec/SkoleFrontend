import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolegijNastavnikComponent } from './kolegij-nastavnik.component';

describe('KolegijNastavnikComponent', () => {
  let component: KolegijNastavnikComponent;
  let fixture: ComponentFixture<KolegijNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolegijNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolegijNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
