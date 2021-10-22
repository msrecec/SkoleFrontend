import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolegijiComponent } from './kolegiji.component';

describe('KolegijiComponent', () => {
  let component: KolegijiComponent;
  let fixture: ComponentFixture<KolegijiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolegijiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolegijiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
