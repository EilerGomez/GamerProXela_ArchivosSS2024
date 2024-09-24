import { TestBed } from '@angular/core/testing';

import { SolicitudesTarjetasService } from './solicitudes-tarjetas.service';

describe('SolicitudesTarjetasService', () => {
  let service: SolicitudesTarjetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesTarjetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
