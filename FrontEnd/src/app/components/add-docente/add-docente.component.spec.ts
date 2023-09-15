import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocenteComponent } from './add-docente.component';

describe('AddDocenteComponent', () => {
  let component: AddDocenteComponent;
  let fixture: ComponentFixture<AddDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDocenteComponent]
    });
    fixture = TestBed.createComponent(AddDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
