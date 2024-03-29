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
}

