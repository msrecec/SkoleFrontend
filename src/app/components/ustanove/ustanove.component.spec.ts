import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstanoveComponent } from './ustanove.component';

describe('UstanoveComponent', () => {
  let component: UstanoveComponent;
  let fixture: ComponentFixture<UstanoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstanoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstanoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
