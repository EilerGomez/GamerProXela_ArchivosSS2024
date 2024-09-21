import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInventarioComponent } from './area-inventario.component';

describe('AreaInventarioComponent', () => {
  let component: AreaInventarioComponent;
  let fixture: ComponentFixture<AreaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
