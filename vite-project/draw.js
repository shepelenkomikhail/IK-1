export class Draw{
    drawCenter(x, y) {
        let cellElement = document.querySelector(`.cell.row-${x}.col-${y}`);
        if (cellElement) {
            let stargate = document.createElement('img');
            stargate.src = "./assets/Stargate.png";
            cellElement.classList.add('bg-transparent');
            cellElement.appendChild(stargate);
        }
    }

    drawPlayer(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('border-4', 'border-orange-500');
        let player = document.createElement('img');
        player.src = "./assets/Player.png";
        cell.append(player);
    }

    drawOasis(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('bg-transparent');
        let oasis = document.createElement('img');
        oasis.src = "./assets/Oasis marker.png";
        cell.append(oasis);
    }

    drawItem1(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('bg-transparent');
        let item1 = document.createElement('img');
        item1.src = "./assets/Item 1.png";
        cell.append(item1);
    }

    drawItem2(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('bg-transparent');
        let item2 = document.createElement('img');
        item2.src = "./assets/Item 2.png";
        cell.append(item2);
    }

    drawItem3(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.classList.add('bg-transparent');
        let item3 = document.createElement('img');
        item3.src = "./assets/Item 3.png";
        cell.append(item3);
    }

    drawClueItem(x, y, direction, n){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        console.log(cell);
        console.log(x, y, direction, n);
        cell.classList.add('bg-transparent');
        let itemClue = document.createElement('img');
        switch(direction){
            case "left":
                itemClue.src = `./assets/Item ${n} - clue_LEFT.png`;
                console.log(itemClue.src);
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
}

