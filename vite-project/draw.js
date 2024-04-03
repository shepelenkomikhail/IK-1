export class Draw{
    drawPlayer(x,y){
        let playerCell = document.querySelector(`.cell.row-${x}.col-${y}`);
        playerCell.classList.add('border-4', 'border-orange-500', 'z-10', 'player');
        let player = document.createElement('img');
        player.src = "./assets/Player.png";
        playerCell.append(player);
    }

    drawOasis(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'oasis');
        cell.classList.add('bg-transparent', 'z-0', 'static');
        let oasis = document.createElement('img');
        oasis.src = "./assets/Oasis marker.png";
        cell.append(oasis);
    }
}