import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioInventarioComponent } from './espacio-inventario.component';

describe('EspacioInventarioComponent', () => {
  let component: EspacioInventarioComponent;
  let fixture: ComponentFixture<EspacioInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
