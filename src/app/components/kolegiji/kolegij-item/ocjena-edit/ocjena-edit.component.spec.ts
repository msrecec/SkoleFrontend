import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcjenaEditComponent } from './ocjena-edit.component';

describe('OcjenaEditComponent', () => {
  let component: OcjenaEditComponent;
  let fixture: ComponentFixture<OcjenaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcjenaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcjenaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
