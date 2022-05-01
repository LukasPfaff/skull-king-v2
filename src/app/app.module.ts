import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { PlayerEntryComponent } from './player-entry/player-entry.component';
import { FormsModule } from '@angular/forms';
import { CallingPhaseComponent } from './calling-phase/calling-phase.component';
import { PlayingPhaseComponent } from './playing-phase/playing-phase.component';
import { BonusPhaseComponent } from './bonus-phase/bonus-phase.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GameComponent,
    PlayerEntryComponent,
    CallingPhaseComponent,
    PlayingPhaseComponent,
    BonusPhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [PlayerEntryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
