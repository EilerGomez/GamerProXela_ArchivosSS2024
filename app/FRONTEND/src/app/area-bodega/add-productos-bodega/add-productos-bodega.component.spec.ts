import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductosBodegaComponent } from './add-productos-bodega.component';

describe('AddProductosBodegaComponent', () => {
  let component: AddProductosBodegaComponent;
  let fixture: ComponentFixture<AddProductosBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductosBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductosBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
