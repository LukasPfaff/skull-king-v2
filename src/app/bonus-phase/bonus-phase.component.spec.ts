import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPhaseComponent } from './bonus-phase.component';

describe('BonusPhaseComponent', () => {
  let component: BonusPhaseComponent;
  let fixture: ComponentFixture<BonusPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
