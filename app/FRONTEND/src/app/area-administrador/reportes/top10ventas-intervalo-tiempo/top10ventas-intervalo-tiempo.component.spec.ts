import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ventasIntervaloTiempoComponent } from './top10ventas-intervalo-tiempo.component';

describe('Top10ventasIntervaloTiempoComponent', () => {
  let component: Top10ventasIntervaloTiempoComponent;
  let fixture: ComponentFixture<Top10ventasIntervaloTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10ventasIntervaloTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ventasIntervaloTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
