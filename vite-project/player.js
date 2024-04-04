import { Board } from "./board";
import { endDialog } from "./endDialog";

const board = new Board();

export class Player{
    constructor(name) {
        this.name = name;
        this.water = 6;
        this.turns = 3;
        this.x = 2;
        this.y = 2;
    }

    useTurn(x, y) {
        if (!this.isCenter(x,y) && this.isWithinBOunds(x, y)) {
            console.log("checked: " , x, y)
            this.turns -= 1;
            
            if (this.turns <= 0) {this.endTurn();}
        } else { console.log("Invalid move!");}
    }

    isCenter(x,y){return (x == 2 && y == 2);}

    isWithinBOunds(x, y) {return x >= 0 && x < 5 && y >= 0 && y < 5}

    endTurn() {
        if(this.water === 0) { endDialog("You are out of water! You lost!");} 
        else  this.water -= 1; 
    }
}