import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKolegijNastavnikComponent } from './new-kolegij-nastavnik.component';

describe('NewKolegijNastavnikComponent', () => {
  let component: NewKolegijNastavnikComponent;
  let fixture: ComponentFixture<NewKolegijNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewKolegijNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKolegijNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
