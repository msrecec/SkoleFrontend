import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolegijItemComponent } from './kolegij-item.component';

describe('KolegijItemComponent', () => {
  let component: KolegijItemComponent;
  let fixture: ComponentFixture<KolegijItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolegijItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolegijItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
