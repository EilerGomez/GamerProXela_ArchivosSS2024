import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCajeroComponent } from './area-cajero.component';

describe('AreaCajeroComponent', () => {
  let component: AreaCajeroComponent;
  let fixture: ComponentFixture<AreaCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
