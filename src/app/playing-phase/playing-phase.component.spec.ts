import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingPhaseComponent } from './playing-phase.component';

describe('PlayingPhaseComponent', () => {
  let component: PlayingPhaseComponent;
  let fixture: ComponentFixture<PlayingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
