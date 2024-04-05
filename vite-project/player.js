import { endDialog } from "./endDialog";

export class Player{
    constructor(name) {
        this.name = name;
        this.water = 6;
        this.turns = 3;
        this.x = 2;
        this.y = 2;
    }

    useTurn() {
        this.turns -= 1;
        if (this.turns <= 0) this.endTurn();
    }

    endTurn() {
        if(this.water === 0) { endDialog("You are out of water! You lost!");} 
        else  this.water -= 1; 
    }
}