import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingPhaseComponent } from './calling-phase.component';

describe('CallingPhaseComponent', () => {
  let component: CallingPhaseComponent;
  let fixture: ComponentFixture<CallingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
