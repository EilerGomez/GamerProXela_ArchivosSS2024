import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCajerosComponent } from './productos-cajeros.component';

describe('ProductosCajerosComponent', () => {
  let component: ProductosCajerosComponent;
  let fixture: ComponentFixture<ProductosCajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
