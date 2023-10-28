import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoProductosComponent } from './agregar-tipo-productos.component';

describe('AgregarTipoProductosComponent', () => {
  let component: AgregarTipoProductosComponent;
  let fixture: ComponentFixture<AgregarTipoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTipoProductosComponent]
    });
    fixture = TestBed.createComponent(AgregarTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
