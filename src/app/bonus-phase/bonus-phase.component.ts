import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';
import { Player } from '../player';
import { Phase } from '../phase';

@Component({
  selector: 'app-bonus-phase',
  templateUrl: './bonus-phase.component.html',
  styleUrls: ['./bonus-phase.component.scss']
})
export class BonusPhaseComponent implements OnInit {

  @Input() game: Game;
  @Output() gameChange = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  adjustBonus(player:Player, incr: boolean){
    let bonus: number = player.getBonus();
    if(incr){
      if(bonus==30){
        bonus += 20;
      }
      else if(bonus==50){
        bonus += 10;
      }
      else{
        bonus += 30;
      }
    }
    else{
      if(bonus==60){
        bonus -= 10;
      }
      else if(bonus==50){
        bonus -= 20;
      }
      else{
        bonus -= 30;
      }
    }

    player.setBonus(bonus);
  }

  buttonActive(player:Player, incr:boolean):boolean{
    return incr ? ((player.getBonus() >= 150) ? false : true) : ((player.getBonus() <= 0) ? false : true)
  }
}
