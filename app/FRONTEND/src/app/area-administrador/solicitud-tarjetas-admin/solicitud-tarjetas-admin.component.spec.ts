import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTarjetasAdminComponent } from './solicitud-tarjetas-admin.component';

describe('SolicitudTarjetasAdminComponent', () => {
  let component: SolicitudTarjetasAdminComponent;
  let fixture: ComponentFixture<SolicitudTarjetasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudTarjetasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudTarjetasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
