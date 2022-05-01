import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game';
import { Phase } from '../phase';
import { Player } from '../player';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss']
})
export class PlayerEntryComponent implements OnInit {

  @Input() game: Game;
  @Output() gameChange = new EventEmitter<Game>();

  decrDis: boolean = false;
  incrDis: boolean = true;

  names: Array<string> = new Array<string>(6);
  riskyZero: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changePlayerCount(incr: boolean){
    if(incr){
      this.names.push('');
      if(this.decrDis){
        this.decrDis = false;
      }
      if(this.names.length == 6){
        this.incrDis = true;
      }
    }
    else{
      this.names.pop();
      if(this.incrDis){
        this.incrDis = false;
      }
      if(this.names.length == 3){
        this.decrDis = true;
      }
    }
  }

  initGame(){
    this.names.forEach(name => {
      let player: Player = new Player(name);
      this.game.addPlayer(player);
    });    

    this.game.setRiskyZero(this.riskyZero);
    this.game.setGamePhase(Phase.Calling);
  }

  trackByFn(index: any, item: any){
    return index;
  }
}
