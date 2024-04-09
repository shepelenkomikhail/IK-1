export class Draw{
    drawPlayer(x,y){
        let playerCell = document.querySelector(`.cell.row-${x}.col-${y}`);

        if (!playerCell.classList.contains('playerCell')) {
            playerCell.classList.add('playerCell', 'player');
            let player = document.createElement('img');
            player.src = "/Player.png";
            playerCell.append(player);
        }
    }

    drawOasis(x,y){
        let cell = document.querySelector(`.cell.row-${x}.col-${y}`);
        cell.setAttribute('alt', 'oasis');
        cell.classList.add('bg-transparent', 'z-0', 'static');
        let oasis = document.createElement('img');
        oasis.src = "/Oasis marker.png";
        cell.append(oasis);
    }
    
}