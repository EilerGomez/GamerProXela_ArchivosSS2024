import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2sucursalesMayorIngresoComponent } from './top2sucursales-mayor-ingreso.component';

describe('Top2sucursalesMayorIngresoComponent', () => {
  let component: Top2sucursalesMayorIngresoComponent;
  let fixture: ComponentFixture<Top2sucursalesMayorIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top2sucursalesMayorIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top2sucursalesMayorIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
