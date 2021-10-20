import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikItemComponent } from './nastavnik-item.component';

describe('NastavnikItemComponent', () => {
  let component: NastavnikItemComponent;
  let fixture: ComponentFixture<NastavnikItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastavnikItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
