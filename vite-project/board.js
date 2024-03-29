import { createBoard } from "./createBoard";
import { Draw } from "./draw";

const board = document.querySelector('#board');
const draw = new Draw();

export class Board{
    board;
    constructor()
    {
        this.board = [];
        createBoard(this.board);
    }
    
    defineBoard() {
        board.innerHTML = "";
        this.board.forEach((row) => {
          row.forEach((cell) => {
            board.innerHTML += cell.getLayout();
          });
        });
    }

    arrangeVisualComponents(){
        draw.drawCenter(2,2);
        this.board[2][2].type = "center";

        let countOasises = 0;
        while (countOasises < 4) {
            let randomX = this.getRandomInt(5);
            let randomY = this.getRandomInt(5);
            let cell = this.board[randomX][randomY];

            if (this.isEmptyCell(cell)) {
                draw.drawOasis(randomX, randomY);
                cell.type = "oasis";
                countOasises++;
            }
        }

        let players = 1;
        let countPlayers = 0;

        while(countPlayers != players){
            let randomX = this.getRandomInt(5);
            let randomY = this.getRandomInt(5);
            let cell = this.board[randomX][randomY];

            if (this.isEmptyCell(cell)) {
                draw.drawPlayer(randomX, randomY);
                cell.type = "player";
                countPlayers++;
            }
        }
    }

    arrangeHidenComponents(){

    }

    getRandomInt(max) { return Math.floor(Math.random() * max);}

    isEmptyCell(cell){
        if (cell.type === "base") return true;
    }

    render(){
        this.defineBoard();
        this.arrangeVisualComponents();
        this.arrangeHidenComponents();
    }
}

