import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvrsiteljEditComponent } from './izvrsitelj-edit.component';

describe('IzvrsiteljEditComponent', () => {
  let component: IzvrsiteljEditComponent;
  let fixture: ComponentFixture<IzvrsiteljEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvrsiteljEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvrsiteljEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
