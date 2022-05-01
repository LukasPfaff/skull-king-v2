import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Phase } from '../phase';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game = new Game();
  gamePhases = Phase;

  gameActive: boolean;
  riskyZero: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
