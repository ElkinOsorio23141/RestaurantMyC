import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciasClienteComponent } from './preferencias-cliente.component';

describe('PreferenciasClienteComponent', () => {
  let component: PreferenciasClienteComponent;
  let fixture: ComponentFixture<PreferenciasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenciasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferenciasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
