export class Player {
    private name: string;
    private points: number;
    private bonus: number;
    private call: number;
    private stitches: number;
    private riskyZero: boolean;
    private wasRiskyZeroUsed: boolean;


    /**
     * Constructor of the Player class, creates a new Player with default values
     */
    constructor(name: string){
        this.name = name;
        this.points = 0;
        this.bonus = 0;
        this.call = 0;
        this.stitches = 0;
        this.riskyZero = false;
        this.wasRiskyZeroUsed = false;
    }

    /**
     * Calculate the players points using his other attributes, the current round number and the bonus points
     * @param round current round
     */
    public setPoints(round: number){
        if(this.call == 0){
            let pointChange: number;
            if(this.riskyZero){
                pointChange = ((round * 10) + 50);
                this.wasRiskyZeroUsed = true;
            }
            else{
                pointChange = (round * 10);
            }
            this.points = this.stitches == 0 ? (this.points + pointChange) : (this.points - pointChange); 
        }
        else{
            this.points = this.call == this.stitches ? (this.points + this.bonus + (this.stitches * 20)) : (this.points - (Math.abs(this.call - this.stitches)*10));
        }
    }

    /**
     * Sets most properties back to default, use at the start of a new round
     */
    public resetPlayer(){
        this.call = 0;
        this.stitches = 0;
        this.bonus = 0;
        this.riskyZero = false;
    }



    /**
     * Get a string to represent the player
     * @returns the name of the player
     */
    public toString(): string{
        return this.name;
    }

    // Setter
    public setCall(i: number){
        this.call = i;
    }

    public setStitches(i: number){
        this.stitches = i;
    }

    public setRiskyZero(b: boolean){
        this.riskyZero = b;
    }

    public setWasRiskyZeroUsed(b: boolean){
        this.wasRiskyZeroUsed = b;
    }

    public setBonus(i: number){
        this.bonus = i;
    }

    // Getter
    public getPoints():number{
        return this.points;
    }

    public getCall():number{
        return this.call;
    }

    public getWasRiskyZeroUsed():boolean{
        return this.wasRiskyZeroUsed;
    }

    public getStitches():number{
        return this.stitches;
    }

    public getRiskyZero():boolean{
        return this.riskyZero;
    }

    public getBonus():number{
        return this.bonus;
    }
}
