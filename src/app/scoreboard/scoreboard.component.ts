import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';
import { Player } from '../player';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  @Input() game:Game;
  @Output() gameChange = new EventEmitter<Game>();

  editActive: Boolean;
  editPlayer: Player;
  editValue: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  activateEdit(player: Player){
    this.editActive = !this.editActive;
    this.editPlayer = player;
  }

  confirmEdit(){
    this.editPlayer.setPointsMan(this.editValue);
    this.editActive = !this.editActive;
    this.editValue = 0;
  }

}
