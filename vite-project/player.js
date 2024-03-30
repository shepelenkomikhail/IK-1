import { s } from "vite/dist/node/types.d-aGj9QkWt";
import { Board } from "./board";
import { Draw } from "./draw";

const board = new Board();
board.render();

const draw = new Draw();

export class Player {

    movePlayer() {
        let player = board.getPlayer();
        //console.log(player);
        let x = player.x;
        let y = player.y;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
                x--;
            }
            else if (event.key === 'ArrowDown') {
                x++;
            }
            else if (event.key === 'ArrowLeft') {
                y--;
            }
            else if (event.key === 'ArrowRight') {
                y++;
            }
            else if (event.key === ' '){
                event.preventDefault(); 
                this.dig(player.x, player.y);
            } else return;

            if (board.isValidMove(x, y)) {
                let cell = document.querySelector(`.cell.row-${player.x}.col-${player.y}`);
                //console.log(cell)

                cell.classList.remove('border-4', 'border-orange-500');

                let img = cell.querySelector('img');
                cell.removeChild(img);

                if (cell.getAttribute('alt') === "oasis") {
                    draw.drawOasis(player.x, player.y); 
                }

                player.x = x;
                player.y = y;

                let newCell = document.querySelector(`.cell.row-${player.x}.col-${player.y}`);
                newCell.classList.add('border-4', 'border-orange-500');

                let existingImg = newCell.querySelector('img');
                if (existingImg) {
                    existingImg.remove();
                }

                let playerImg = document.createElement('img');
                playerImg.src = "./assets/Player.png";
                
                newCell.append(playerImg);
                
            } else {
                x = player.x;
                y = player.y;
            }
        });
    }

    dig(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);

        switch(cell.getAttribute('alt')){
            case "item1":
                draw.drawItem1(x,y);
                break;
            case "item2":
                draw.drawItem2(x,y);
                break;
            case "item3":
                draw.drawItem3(x,y);
                break;
            case "clueItem1":
                draw.drawClueItem(x,y,"left", 1);
                break;
            case "clueItem2":
                draw.drawClueItem(x,y,"right", 2);
                break;
            case "clueItem3":
                draw.drawClueItem(x,y,"up", 3);
                break;
            case "oasis":
                draw.drawOasis(x,y);
                break;
            default: 
                
        }
    }
}