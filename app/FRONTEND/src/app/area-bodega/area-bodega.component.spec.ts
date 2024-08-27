import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBodegaComponent } from './area-bodega.component';

describe('AreaBodegaComponent', () => {
  let component: AreaBodegaComponent;
  let fixture: ComponentFixture<AreaBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaBodegaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
