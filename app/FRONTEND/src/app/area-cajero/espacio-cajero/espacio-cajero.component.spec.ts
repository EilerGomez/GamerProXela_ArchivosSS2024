import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioCajeroComponent } from './espacio-cajero.component';

describe('EspacioCajeroComponent', () => {
  let component: EspacioCajeroComponent;
  let fixture: ComponentFixture<EspacioCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
