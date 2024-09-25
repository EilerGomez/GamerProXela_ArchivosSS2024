import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ClientesMayorGastoComponent } from './top10-clientes-mayor-gasto.component';

describe('Top10ClientesMayorGastoComponent', () => {
  let component: Top10ClientesMayorGastoComponent;
  let fixture: ComponentFixture<Top10ClientesMayorGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10ClientesMayorGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ClientesMayorGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
