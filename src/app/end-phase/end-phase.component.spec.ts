import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPhaseComponent } from './end-phase.component';

describe('EndPhaseComponent', () => {
  let component: EndPhaseComponent;
  let fixture: ComponentFixture<EndPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
