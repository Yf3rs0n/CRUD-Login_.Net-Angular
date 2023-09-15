import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocenteComponent } from './edit-docente.component';

describe('EditDocenteComponent', () => {
  let component: EditDocenteComponent;
  let fixture: ComponentFixture<EditDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDocenteComponent]
    });
    fixture = TestBed.createComponent(EditDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
