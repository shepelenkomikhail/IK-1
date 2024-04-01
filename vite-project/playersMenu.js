import { Player } from "./player";

const players = document.getElementById('players');

export class PlayersMenu{
    constructor(){this.itemsContainer = null}
    generateDivs (count) {
        for(let i = 0; i < count+1; i++){
            let div = document.createElement('div');
            let p = document.createElement('p');
            let text = "";

            if (i === 1) {
                div.classList.add('components-div');
                text = "Components";
                div.classList.add('row-span-2', 'flex', 'flex-col', 'items-center');

                let item1 = document.createElement('img');
                item1.src = "./assets/item1.png";
                item1.classList.add('w-14', 'h-14', 'opacity-50');
    
                let item2 = document.createElement('img');
                item2.src = "./assets/item2.png";
                item2.classList.add('w-14', 'h-14', 'opacity-50');
    
                let item3 = document.createElement('img');
                item3.src = "./assets/item3.png";
                item3.classList.add('w-14', 'h-14', 'opacity-50');
    
                this.itemsContainer = document.createElement('div');
                this.itemsContainer.append(item1, item2, item3);
                this.itemsContainer.setAttribute('id', 'itemsCont')

            } else if (i == 0) text = "Player " + (i + 1); else text = "Player " + i;

            let playerContainer = document.createElement('div');
            playerContainer.classList.add('flex', 'gap-2', 'items-center', 'flex-row');

            let waterImg = document.createElement('img');
            waterImg.classList.add('w-10', 'h-10');
            let amountWater = 6;
            let waterText = document.createElement('p');
            waterText.textContent = amountWater;
            waterText.classList.add('font-bold', 'text-lg', 'water-text');

            let turnImg = document.createElement('img');
            turnImg.classList.add('w-10', 'h-10', 'ml-8');
            let amountTurn = 3;
            let turnText = document.createElement('p');
            turnText.textContent = amountTurn;
            turnText.classList.add('font-bold', 'text-lg', 'turn-text');

            playerContainer.append(waterImg, waterText, turnImg, turnText);
            playerContainer.classList.add('mt-2');

            waterImg.src = "./assets/Water.png";
            turnImg.src = "./assets/Action Points.png";

            p.append(text);
            p.classList.add('ml-2')
            div.append(p);
            if(i == 1) div.append(this.itemsContainer)
            if(i != 1) div.append(playerContainer);
            div.classList.add('border-2', 'border-red-500', 'rounded-md')
            players.append(div)
        }
    }
}