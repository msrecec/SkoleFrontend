import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmjeroviComponent } from './smjerovi.component';

describe('SmjeroviComponent', () => {
  let component: SmjeroviComponent;
  let fixture: ComponentFixture<SmjeroviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmjeroviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmjeroviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
