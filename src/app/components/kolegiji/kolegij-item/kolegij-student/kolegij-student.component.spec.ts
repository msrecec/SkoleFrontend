import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolegijStudentComponent } from './kolegij-student.component';

describe('KolegijStudentComponent', () => {
  let component: KolegijStudentComponent;
  let fixture: ComponentFixture<KolegijStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolegijStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolegijStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
