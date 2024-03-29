import { Cell } from "./cell";

export function createBoard(board){
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) row.push(new Cell(i, j, "base"));
        board.push(row);
    }
}