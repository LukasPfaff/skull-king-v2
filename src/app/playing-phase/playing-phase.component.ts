import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';
import { Phase } from '../phase';
import { Player } from '../player';

@Component({
  selector: 'app-playing-phase',
  templateUrl: './playing-phase.component.html',
  styleUrls: ['./playing-phase.component.scss']
})
export class PlayingPhaseComponent implements OnInit {

  @Input() game: Game;
  @Output() gameChange = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  adjustStitches(player:Player, incr: boolean){
    let stitch = player.getStitches();    
    stitch = incr ? stitch+1 : stitch-1;
    player.setStitches(stitch);
  }

  buttonActive(player:Player, incr: boolean):boolean{
    const stitch = player.getStitches();
    const round = this.game.getRound();
    return incr ? ((stitch < round) ? true : false) : ((stitch > 0) ? true : false);
  }

  commitStitches(){
    let sum: number = 0;

    this.game.getPlayers().forEach(player => {
      sum += player.getStitches();
    });

    if(sum != this.game.getRound()){
      alert("The stitches have to add up to the current round number!");
    }
    else{
      this.game.setGamePhase(Phase.Bonus);
    }   
  }
}
