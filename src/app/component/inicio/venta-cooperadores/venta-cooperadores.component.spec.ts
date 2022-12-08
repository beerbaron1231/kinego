import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCooperadoresComponent } from './venta-cooperadores.component';

describe('VentaCooperadoresComponent', () => {
  let component: VentaCooperadoresComponent;
  let fixture: ComponentFixture<VentaCooperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VentaCooperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaCooperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
