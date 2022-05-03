import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phase } from '../phase';
import { Game } from '../game';
import { Player } from '../player';

@Component({
  selector: 'app-calling-phase',
  templateUrl: './calling-phase.component.html',
  styleUrls: ['./calling-phase.component.scss']
})
export class CallingPhaseComponent implements OnInit {

  @Input() game: Game;
  @Output() gameChange = new EventEmitter<Game>();
  
  constructor() { }

  ngOnInit(): void {
  }

  adjustCall(player:Player, incr: boolean){
    let call = player.getCall();    
    call = incr ? call+1 : call-1;
    player.setCall(call);
    if(call > 0 && player.getRiskyZero()){this.adjustRisky(player);}
  }

  adjustRisky(player:Player){
    player.setRiskyZero(!player.getRiskyZero());
  }

  riskyDisplay():boolean{
    return this.game.getRound() > 4 && this.game.getRisky();
  }

  riskyActive(player:Player):boolean{
    return !player.getWasRiskyZeroUsed();
  }

  buttonActive(player:Player, incr: boolean):boolean{
    const call = player.getCall();
    const round = this.game.getRound();

    return incr ? ((call < round) ? true : false) : ((call > 0) ? true : false);
  }

  commitCalls(){
    const players = this.game.getPlayers();
    players.forEach(player => {
      player.setStitches(player.getCall());
    });
    this.game.setGamePhase(Phase.Playing);
  }
}
