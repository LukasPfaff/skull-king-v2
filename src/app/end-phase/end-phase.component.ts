import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { Player } from '../player';

@Component({
  selector: 'app-end-phase',
  templateUrl: './end-phase.component.html',
  styleUrls: ['./end-phase.component.scss']
})
export class EndPhaseComponent implements OnInit {
  players : Player[];

  @Input() game:Game;

  constructor() { }

  ngOnInit(): void {
    this.players = Array.from(this.game.getPlayers());
    this.players.sort((a,b) => (a.getPoints() < b.getPoints()) ? 1 : -1);
  }

  newGame(){
    window.location.reload();
  }
}
