import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladarProductosComponent } from './trasladar-productos.component';

describe('TrasladarProductosComponent', () => {
  let component: TrasladarProductosComponent;
  let fixture: ComponentFixture<TrasladarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasladarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasladarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
