import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKolegijStudentComponent } from './new-kolegij-student.component';

describe('NewKolegijStudentComponent', () => {
  let component: NewKolegijStudentComponent;
  let fixture: ComponentFixture<NewKolegijStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewKolegijStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKolegijStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
