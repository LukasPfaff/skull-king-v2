import { Phase } from "./phase";
import { Player } from "./player";

export class Game {
    private players: Player[] = new Array<Player>(0);
    private round: number;
    private riskyZero: boolean;
    private gamePhase: Phase;
    private scoreboard: number[][] = new Array<number[]>();

    constructor(){
        this.round = 1;
        this.gamePhase = Phase.Initialize;
     }

    /**
     * Increase the round counter and reset the players calls/stitches
     */
    public nextRound(){
        let points = new Array<number>();
        for(let i: number = 0; i < this.players.length; i++){
            let player: Player = this.players[i];
            player.setPoints(this.round);
            points.push(player.getPoints());
            player.resetPlayer();
        }
        this.scoreboard.push(points);

        if(this.round < 10){
            this.round++;
            this.gamePhase = Phase.Calling;
        }
        else{
            this.gamePhase = Phase.End;
        }
    }

    // setter
    /**
     * Add a player to the players array
     * @param player a player
     */
    public addPlayer(player:Player){
        this.players.push(player);
    }

    public setRiskyZero(b: boolean){
        this.riskyZero = b;
    }

    /**
     * set the call of the player at index position
     * @param call his call
     * @param index his position
     */
    public setCall(call: number, index: number){
        this.players[index].setCall(call);
    }

    /**
     * set the points for a player at a given position
     * @param stitches number of stitches he made that round
     * @param bonus bonus points he got
     * @param index his position
     */
    public setPoints(stitches: number, index: number){
        this.players[index].setStitches(stitches);
        this.players[index].setPoints(this.round);
    }

    public setGamePhase(phase: Phase){
        this.gamePhase = phase;
    }

    // getter
    /**
     * 
     * @returns number of players
     */
    public getPlayerNumber():number{
        return this.players.length;
    }

    /**
     * Get the name of a player with his position
     * @param index position of the player
     * @returns player name
     */
    public getPlayerName(index: number):string{
        return this.players[index].toString();
    }

    /**
     * Get the points of a player
     * @param index his position
     * @returns the points he has
     */
    public getPlayerPoints(index: number): number{
        return this.players[index].getPoints();
    }

    /**
     * 
     * @returns whether the risky zero mechanic is activated
     */
    public getRisky(): boolean{
        return this.riskyZero;
    }

    /**
     * 
     * @returns current round of the game
     */
    public getRound():number{
        return this.round;
    }

    /**
     * Get the array containing the players
     * @returns players
     */
    public getPlayers(): Player[]{
        return this.players;
    }

    public getGamePhase(): Phase{
        return this.gamePhase;
    }

    public getScoreboard(): number[][]{
        return this.scoreboard;
    }

    /**
     * 
     * @returns index of the starting player this round
     */
    public getStartingPlayer():number{
        let startingPlayer = this.round-1 % this.players.length;
        return startingPlayer == 0 ? this.players.length : startingPlayer;
    }
}
