import { Board } from "./board";
import { Player } from "./player";

const board = new Board();
board.render();

const currElem = document.querySelector('#currentElement');

export class Game {
    constructor(playerCount, names) {
        this.players = [];

        for (let i = 0; i < playerCount; i++) {this.players.push(new Player(`${names[i]}`));}
        console.log(this.players);

        this.currentPlayerIndex = 0; 
        this.firstMoveVar = true;

        this.player = board.getPlayer();

        this.x = this.player.x;
        this.y = this.player.y;

        this.updateUI(); 
    }

    movePlayer() { 
        document.addEventListener('keydown', (event) => {
            const currentPlayer = this.players[this.currentPlayerIndex];
            this.updateUI();

            if (event.key === 'ArrowUp') {
                this.x--;
                const isAct = this.moveAction(this.x, this.y);
                if(this.firstMoveVar) this.firstMove();
                if(isAct) currentPlayer.useTurn();
            }
            else if (event.key === 'ArrowDown') {
                this.x++;
                const isAct = this.moveAction(this.x, this.y);
                if(this.firstMoveVar) this.firstMove();
                if(isAct) currentPlayer.useTurn();
            }
            else if (event.key === 'ArrowLeft') {
                this.y--;
                const isAct = this.moveAction(this.x, this.y);
                if(this.firstMoveVar) this.firstMove();
                if(isAct) currentPlayer.useTurn();
            }
            else if (event.key === 'ArrowRight') {
                this.y++;
                const isAct = this.moveAction(this.x, this.y);
                if(this.firstMoveVar) this.firstMove();
                if(isAct) currentPlayer.useTurn();
            }
            else if (event.key === ' '){
                event.preventDefault(); 
                this.dig(board.getPlayer().x, board.getPlayer().y);
                currentPlayer.useTurn();
            } else return;

            this.updateUI()
            if (currentPlayer.turns === 0) { this.nextPlayer(); this.updateUI()}
        });
    }

    nextPlayer() {
        this.players[this.currentPlayerIndex].turns = 3;
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        this.updateUI();
        console.log("next player")  
    }

    updateUI() {
        let playersUI = document.querySelectorAll('#players > div:not(.components-div)');
        playersUI.forEach((playerUI, index) => {
            const player = this.players[index]; 
            if (index === this.currentPlayerIndex) {
                playerUI.classList.add('playerUI-border');
            } else {
                playerUI.classList.remove('playerUI-border');
                playerUI.classList.add('border-2', 'border-red');
            }

            const waterText = playerUI.querySelector('.water-text');
            const turnText = playerUI.querySelector('.turn-text');          

            if (waterText) waterText.textContent = player.water
            if (turnText) turnText.textContent = player.turns

        });
    }

    moveAction(x, y) {
        if (board.isValidMove(x, y)) {
            const oldCell = document.querySelector(`.cell.row-${this.player.x}.col-${this.player.y}`);
            const newCell = document.querySelector(`.cell.row-${x}.col-${y}`);
            const playerImage = './assets/Player.png';

            if (board.getBoard()[this.player.x][this.player.y].dugItem){
                const dugItemImage = `./assets/${board.getBoard()[this.player.x][this.player.y].dugItem}.png`;
                oldCell.innerHTML = `<img src="${dugItemImage}"/>`;
                if(oldCell.classList.contains('playerCell')) oldCell.classList.remove('playerCell');
            } else if ((board.getBoard()[this.player.x][this.player.y].type === "oasis" || 
            board.getBoard()[this.player.x][this.player.y].type === "Drought" && 
            !board.getBoard()[this.player.x][this.player.y].dugItem)){
                oldCell.innerHTML = `<img src="./assets/Oasis marker.png" />`;
                if(oldCell.classList.contains('playerCell')) oldCell.classList.remove('playerCell');
            } else {
                oldCell.innerHTML = '';
                if(oldCell.classList.contains('playerCell')) oldCell.classList.remove('playerCell');
            }

            if (board.getBoard()[x][y].dugItem) {
                const dugItemImage = `./assets/${board.getBoard()[x][y].dugItem}.png`; 
                newCell.innerHTML = `<img src="${playerImage}" />`;
            } else {
                newCell.innerHTML = `<img src="${playerImage}" class="relative" />`;
                newCell.classList.add('playerCell');
                if(oldCell.classList.contains('playerCell')) oldCell.classList.remove('playerCell');
            }
            
            this.player.x = x;
            this.player.y = y;
            return true
        } else {
            this.x = this.player.x;
            this.y = this.player.y;
            return false
        }
    }
    
    dig(x,y){
        const cell = board.getBoard()[x][y];
        const cellElement = document.querySelector(`.cell.row-${x}.col-${y}`);
        cellElement.classList.add('bg-transparent');
        let dugItem = cell.type;

        switch(dugItem){
            case "item1":
                this.foundElement("assets/item1.png");
                break;
            case "item2":
                this.foundElement("assets/item2.png");
                break;
            case "item3":
                this.foundElement("assets/item3.png");
            case "oasis":
                this.refillWater();
                break;
            default: break;
        }

        if (dugItem) {
            cell.dugItem = dugItem;
            const dugItemImage = `./assets/${dugItem}.png`; 
            const dugItemElement = `<img src="${dugItemImage}"/>`;

            currElem.innerHTML = dugItemElement;

            if (this.isEnd()) {
                const main = document.querySelector('main');
                main.classList.add('blur-sm');
                document.querySelector('#fixed').removeChild(document.querySelector('#timer'));

                let endDialog = document.createElement('div');
                endDialog.classList.add('dialog');
                endDialog.innerHTML = `<p class="text-center text-black font-bold">Congratulations, you won!</p>`
                
                let restartButton = document.createElement('button');
                restartButton.textContent = "Restart";
                restartButton.classList.add('custom-button');
                restartButton.addEventListener('click', () => { window.location.reload();});
                endDialog.append(restartButton);
                document.body.append(endDialog);
            }
        }
    }

    firstMove(){
        let center = board.board[2][2];
        center.type = "center";
        let cellElem = document.querySelector(`.cell.row-2.col-2`);
        cellElem.setAttribute('alt', 'center');
        cellElem.classList.add('bg-transparent', 'border-none');
        let stargate = document.createElement('img');
        stargate.src = "./assets/Stargate.png";
        cellElem.appendChild(stargate);
        this.firstMoveVar = false;
    }

    isEnd(){
        let foundElem = 0
        const itemsCont = document.querySelector("#itemsCont")
        const images = itemsCont.querySelectorAll("img");

        images.forEach(img => {
            if(!img.classList.contains('opacity-50')) foundElem++;
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
    
    refillWater(){
        let playersUI = document.querySelectorAll('#players > div:not(.components-div)');
        playersUI.forEach((playerUI, index) => {
            const player = this.players[index];
            player.water = 6;
            this.updateUI();
        })
    }
}