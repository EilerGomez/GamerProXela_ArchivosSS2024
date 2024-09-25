import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ProductosMasVendidosComponent } from './top10-productos-mas-vendidos.component';

describe('Top10ProductosMasVendidosComponent', () => {
  let component: Top10ProductosMasVendidosComponent;
  let fixture: ComponentFixture<Top10ProductosMasVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10ProductosMasVendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ProductosMasVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
