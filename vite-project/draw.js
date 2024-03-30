export class Draw{
    drawCenter(x, y) {
        let cellElement = document.querySelector(`.cell.row-${x}.col-${y}`);
        cellElement.setAttribute('alt', 'center');
        if (cellElement) {
            let stargate = document.createElement('img');
            stargate.src = "./assets/Stargate.png";
            cellElement.classList.add('bg-transparent', 'border-none');
            cellElement.appendChild(stargate);
        }
    }

    drawPlayer(x,y){
        let playerCell = document.querySelector(`.cell.row-${x}.col-${y}`);
        playerCell.classList.add('border-4', 'border-orange-500');
        let player = document.createElement('img');
        player.src = "./assets/Player.png";
        playerCell.append(player);
    }

    drawOasis(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'oasis');
        cell.classList.add('bg-transparent');
        let oasis = document.createElement('img');
        oasis.src = "./assets/Oasis marker.png";
        cell.append(oasis);
    }

    drawItem1(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'item1');
        let item1 = document.createElement('img');
        item1.src = "./assets/Item 1.png";
        item1.classList.add('invisible');
        cell.append(item1);
    }

    drawItem2(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'item2');
        let item2 = document.createElement('img');
        item2.src = "./assets/Item 2.png";
        item2.classList.add('invisible');
        cell.append(item2);
    }

    drawItem3(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'item3');
        let item3 = document.createElement('img');
        item3.src = "./assets/Item 3.png";
        item3.classList.add('invisible');
        cell.append(item3);
    }
 
    drawClueItem(x, y, direction, n){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', `clueItem${n}`);
        let itemClue = document.createElement('img');
        itemClue.classList.add('invisible');
        switch(direction){
            case "left":
                itemClue.src = `./assets/Item ${n} - clue_LEFT.png`;
                //console.log(itemClue.src);
                break;
            case "right":
                itemClue.src = `./assets/Item ${n} - clue_RIGHT.png`;
                break;
            case "down":
                itemClue.src = `./assets/Item ${n} - clue_DOWN.png`;
                break;
            case "up":
                itemClue.src = `./assets/Item ${n} - clue_UP.png`;
                break;
            default:
                break;
        }
        cell.append(itemClue);
    }

    drawHole(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'untochable');
        let hole = document.createElement('img');
        hole.src = "./assets/Hole.png";
        cell.append(hole);
    }
}

