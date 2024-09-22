import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionClientesSolicitudesComponent } from './modificacion-clientes-solicitudes.component';

describe('ModificacionClientesSolicitudesComponent', () => {
  let component: ModificacionClientesSolicitudesComponent;
  let fixture: ComponentFixture<ModificacionClientesSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionClientesSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionClientesSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
