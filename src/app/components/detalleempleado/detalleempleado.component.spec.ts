import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleempleadoComponent } from './detalleempleado.component';

describe('DetalleempleadoComponent', () => {
  let component: DetalleempleadoComponent;
  let fixture: ComponentFixture<DetalleempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
