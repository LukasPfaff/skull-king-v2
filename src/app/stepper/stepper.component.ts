import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Game } from '../game';
import { Phase } from '../phase';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() game: Game;
  @Output() gameChange = new EventEmitter<Game>();

  gamePhases = Phase;

  constructor() { }

  ngOnInit(): void {
  }

}
