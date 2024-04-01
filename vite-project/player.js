import { Board } from "./board";
const board = new Board();

export class Player{
    constructor(name) {
        this.name = name;
        this.water = 6;
        this.turns = 3;
    }

    useTurn(x, y) {
        if (!this.isCenter(x,y) && this.isWithinBOunds(x, y)) {
            console.log("checked: " , x, y)

            this.turns -= 1;
            if (this.turns <= 0) {
                this.endTurn();
            }
        } else {
            console.log("Invalid move!");
        }
    }

    isCenter(x,y){
        return (x == 2 && y == 2);
    }

    isWithinBOunds(x, y) {return x >= 0 && x < 5 && y >= 0 
        && y < 5}

    endTurn() {
        if(this.water === 0) {
            const main = document.querySelector('main');

            main.classList.add('blur-sm');

            document.body.removeChild(document.querySelector('#timer'));

            let endDialog = document.createElement('div');
            endDialog.classList.add('w-1/2', 'h-1/4', 'bg-amber-300', 'text-white', 
            'text-2xl', 'flex', 'justify-center', 'items-center', 'rounded-lg', 
            'fixed', 'left-1/4', 'top-1/4' , 'transform', 'absolute', 
            'z-10', 'flex-col');

            endDialog.innerHTML = `<p class="text-center text-black font-bold">You lost :-( </p>`
            
            let restartButton = document.createElement('button');
            restartButton.textContent = "Restart";

            restartButton.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md', 'hover:scale-110');
            restartButton.addEventListener('click', () => {
                window.location.reload();
            });

            endDialog.append(restartButton);
            document.body.append(endDialog);
        } 
        else  this.water -= 1; 
    }
}