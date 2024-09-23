import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDescuentoComponent } from './tarjetas-descuento.component';

describe('TarjetasDescuentoComponent', () => {
  let component: TarjetasDescuentoComponent;
  let fixture: ComponentFixture<TarjetasDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasDescuentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
