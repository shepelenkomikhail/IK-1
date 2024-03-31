import { Board } from "./board";
import { Draw } from "./draw";

const board = new Board();
board.render();

const draw = new Draw();
let firstMove = true;
let player = board.getPlayer();
//console.log(player);
let x = player.x;
let y = player.y;

export class Player {

    movePlayer() {
        if(!this.isEnd()){
            document.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowUp') {
                    this.firstMove();
                    x--;
                    this.moveAction(x, y);
                }
                else if (event.key === 'ArrowDown') {
                    this.firstMove();
                    x++;
                    this.moveAction(x, y);
                }
                else if (event.key === 'ArrowLeft') {
                    this.firstMove();
                    y--;
                    this.moveAction(x, y);
                }
                else if (event.key === 'ArrowRight') {
                    this.firstMove();
                    y++;
                    this.moveAction(x, y);
                }
                else if (event.key === ' '){
                    event.preventDefault(); 
                    this.dig(board.getPlayer().x, board.getPlayer().y);

                } else return;
            });
        }   
    }

    moveAction(x, y){
        if (board.isValidMove(x, y)) {
            let cell = document.querySelector(`.cell.row-${player.x}.col-${player.y}`);

            cell.classList.remove('border-4', 'border-orange-500');

            let img = cell.querySelector('img');
            let imgUrl = img.src;
            let url = new URL(imgUrl);
            let imagePath = url.pathname;
            let relativePath = imagePath.substring(1);

            if(relativePath === "assets/Player.png") {
                cell.removeChild(img); 
                console.log("removed");
            } else console.log("not removed");

            
            if (cell.getAttribute('alt') === "oasis") { draw.drawOasis(player.x, player.y); }

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
    }

    dig(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('bg-transparent')

        switch(cell.getAttribute('alt')){
            case "item1":
                draw.drawItem1(x,y);
                this.foundElement("assets/Item 1.png");
                break;
            case "item2":
                draw.drawItem2(x,y);
                this.foundElement("assets/Item 2.png");
                break;
            case "item3":
                draw.drawItem3(x,y);
                this.foundElement("assets/Item 3.png");
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
            default: draw.drawHole(x,y); break;
        }
        cell.setAttribute('alt', 'digged');
    }

    firstMove(){
        if (firstMove === true) {
            draw.drawCenter(2,2); 
            firstMove = false; 
            board.board[2][2].type = "center";
        }
    }

    isEnd(){
        let foundElem = 0
        const itemsCont = document.querySelector("#itemsCont")
        const images = itemsCont.querySelectorAll("img");

        images.forEach(img => {
            if(!img.classList.contains('opacity-50')) foundElem++
        });
        
        if(foundElem === 3) return true;
    }

    foundElement(element) {
        const itemsCont = document.querySelector("#itemsCont");
        const images = itemsCont.querySelectorAll("img");
    
        images.forEach(img => {
            let url = new URL(img.src);
            let relativePath = url.pathname.substring(1); 
            let decodedPath = decodeURIComponent(relativePath); 

            if(element === decodedPath) {
                console.log("Found matching element:", element, decodedPath);
                img.classList.remove('opacity-50');
                return;
            }
        });
    }
    
    
    
}