import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroResenasComponent } from './filtro-resenas.component';

describe('FiltroResenasComponent', () => {
  let component: FiltroResenasComponent;
  let fixture: ComponentFixture<FiltroResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroResenasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
