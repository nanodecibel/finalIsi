import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesEvalacionesComponent } from './calificaciones-evalaciones.component';

describe('CalificacionesEvalacionesComponent', () => {
  let component: CalificacionesEvalacionesComponent;
  let fixture: ComponentFixture<CalificacionesEvalacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificacionesEvalacionesComponent]
    });
    fixture = TestBed.createComponent(CalificacionesEvalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
