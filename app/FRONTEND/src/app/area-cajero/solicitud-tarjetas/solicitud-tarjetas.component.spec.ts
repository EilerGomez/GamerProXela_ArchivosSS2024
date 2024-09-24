import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTarjetasComponent } from './solicitud-tarjetas.component';

describe('SolicitudTarjetasComponent', () => {
  let component: SolicitudTarjetasComponent;
  let fixture: ComponentFixture<SolicitudTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
