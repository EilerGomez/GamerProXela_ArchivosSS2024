import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioBodegaComponent } from './espacio-bodega.component';

describe('EspacioBodegaComponent', () => {
  let component: EspacioBodegaComponent;
  let fixture: ComponentFixture<EspacioBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
