import { createBoard } from "./createBoard";
import { Draw } from "./draw";

const board = document.querySelector('#board');
const draw = new Draw();

export class Board{
    board;
    playerCell;
    constructor()
    {
        this.board = [];
        this.playerCell = null;
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
        let countOasises = 0;
        while (countOasises < 4) {
            let randomX = this.getRandomInt(5);
            let randomY = this.getRandomInt(5);
            let cell = this.board[randomX][randomY];

            if (this.isEmptyCell(cell) && (randomX !== 2 || randomY !== 2)) {
                draw.drawOasis(randomX, randomY);
                cell.type = "oasis";
                countOasises++;
            }
        }
         let cell = this.board[2][2];
         draw.drawPlayer(2, 2);
         this.playerCell = cell;
    }

    arrangeHidenComponents(){
        let randomX, randomY;
        let cell, freeCell;
        let c;
    
        randomX = this.getRandomInt(5);
        randomY = this.getRandomInt(5);
        cell = this.board[randomX][randomY];
    
        freeCell = this.findCell(cell);
        console.log(freeCell);
        let item1 = this.board[freeCell[0]][freeCell[1]];
        this.placeClueItem(item1, 1);
        item1.type = "item1"
        c = document.querySelector(`.cell.row-${freeCell[0]}.col-${freeCell[1]}`);
        c.setAttribute('alt', 'item1');

        freeCell = this.findCell(cell);
        let item2 = this.board[freeCell[0]][freeCell[1]];
        this.placeClueItem(item2, 2);
        item2.type = "item2";
        c = document.querySelector(`.cell.row-${freeCell[0]}.col-${freeCell[1]}`);
        c.setAttribute('alt', 'item2');

        freeCell = this.findCell(cell);
        let item3 = this.board[freeCell[0]][freeCell[1]];
        this.placeClueItem(item3, 3);
        item3.type = "item3";
        c = document.querySelector(`.cell.row-${freeCell[0]}.col-${freeCell[1]}`);
        c.setAttribute('alt', 'item3');
    }

    placeClueItem(item, n) {
        const directions = ["left", "right", "up", "down"];
        let emptyCells = [];
    
        this.board.forEach((row) => {
            row.forEach((cell) => {
                if (this.isEmptyCell(cell)) {
                    emptyCells.push(cell);
                }
            });
        });
    
        emptyCells.sort(() => Math.random() - 0.5);
   
        directions.forEach(direction => {
            let [dx, dy] = [0, 0];
            switch (direction) {
                case "left":
                    dy = 1;
                    break;
                case "right":
                    dy = -1;
                    break;
                case "up":
                    dx = 1;
                    break;
                case "down":        
                    dx = -1;
                    break;
            }
    
            let found = false;
            for (let i = 0; i < emptyCells.length; i++) {
                const newX = item.x + dx * (i + 1);
                const newY = item.y + dy * (i + 1);

                if (newX >= 0 && newX < this.board.length && newY >= 0 && newY < this.board[0].length) {
                    const nextCell = this.board[newX][newY];

                    if (this.isEmptyCell(nextCell)) {
                        const nC = document.querySelector(`.cell.row-${newX}.col-${newY}`);
                        nC.setAttribute('alt', `clueItem${n}${direction}`);

                        nextCell.type = `clueItem${n}`;
                        found = true;
                        break;
                    }
                } else {
                    break;
                }
            }
    
            if (found) {
                emptyCells = emptyCells.filter(cell => {
                    const diffX = Math.abs(cell.x - item.x);
                    const diffY = Math.abs(cell.y - item.y);
                    return (diffX !== 0 || diffY !== 0) && (diffX !== 1 || diffY !== 1);
                });
            }
        });
    }

    getRandomInt(max) { return Math.floor(Math.random() * max);}

    findCell(cell) { 
        let randomX, randomY;
        do {
            randomX = this.getRandomInt(5);
            randomY = this.getRandomInt(5);
            cell = this.board[randomX][randomY];
        } while (!this.isEmptyCell(cell));
        return [randomX, randomY];
    }

    isEmptyCell(cell){
        if (cell.type === "base") return true;
    }

    getPlayer() {return this.playerCell}
    getBoard(){ return this.board;}

    isValidMove(x, y){ return x >= 0 && x < this.board.length && y >= 0 && y < this.board.length && this.board[x][y].type !== "center";}

    writeCellTypes(){
        this.board.forEach((row) => {
            row.forEach((cell) => {
                console.log(cell)
            });
        });
    }

    render(){
        this.defineBoard();
        this.arrangeVisualComponents();
        this.arrangeHidenComponents();
       // this.writeCellTypes();
    }
}

