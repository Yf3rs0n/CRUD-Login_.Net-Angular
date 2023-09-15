import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesListComponent } from './docentes-list.component';

describe('DocentesListComponent', () => {
  let component: DocentesListComponent;
  let fixture: ComponentFixture<DocentesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocentesListComponent]
    });
    fixture = TestBed.createComponent(DocentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
