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
                this.dig(board.getPlayer().x, board.getPlayer().y);

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
        cell.classList.add('bg-transparent')

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
            case "clueItem1down":
                draw.drawClueItem(x,y,"down", 1);
                break;
            case "clueItem1up":
                draw.drawClueItem(x,y,"up", 1);
                break;
            case "clueItem1left":
                draw.drawClueItem(x,y,"left", 1);
                break;
            case "clueItem1right":
                draw.drawClueItem(x,y,"right", 1);
                break;
            case "clueItem2down":
                draw.drawClueItem(x,y,"down", 2);
                break;
            case "clueItem2up":
                draw.drawClueItem(x,y,"up", 2);
                break;
            case "clueItem2left":
                draw.drawClueItem(x,y,"left", 2);
                break;
            case "clueItem2right":
                draw.drawClueItem(x,y,"right", 2);
                break;
            case "clueItem3down":
                draw.drawClueItem(x,y,"down", 3);
                break;
            case "clueItem3up":
                draw.drawClueItem(x,y,"up", 3);
                break;
            case "clueItem3left":
                draw.drawClueItem(x,y,"left", 3);
                break;
            case "clueItem3right":
                draw.drawClueItem(x,y,"right", 3);
                break;
            case "oasis":
                draw.drawOasis(x,y);
                break;
            default: 

        }
    }
}