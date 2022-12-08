import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCooperadoresComponent } from './detalle-cooperadores.component';

describe('DetalleCooperadoresComponent', () => {
  let component: DetalleCooperadoresComponent;
  let fixture: ComponentFixture<DetalleCooperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetalleCooperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCooperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
