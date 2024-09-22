import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesModificacionClienteComponent } from './solicitudes-modificacion-cliente.component';

describe('SolicitudesModificacionClienteComponent', () => {
  let component: SolicitudesModificacionClienteComponent;
  let fixture: ComponentFixture<SolicitudesModificacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesModificacionClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesModificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
