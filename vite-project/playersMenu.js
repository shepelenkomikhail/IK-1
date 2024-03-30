const players = document.getElementById('players');

export class PlayersMenu{

    generateDivs () {
        for(let i = 0; i < 5; i++){
            let div = document.createElement('div');
            let p = document.createElement('p');
            let itemsContainer = document.createElement('div');
            let pl = "";

            if (i === 1) {
                pl = "Components";
                div.classList.add('row-span-2', 'flex', 'flex-col');

                //itemsContainer.classList.add('w-full', 'h-full');
                itemsContainer.style.overflow = 'auto';

                let item1 = document.createElement('img');
                item1.src = "./assets/Item 1.png";
    
                let item2 = document.createElement('img');
                item2.src = "./assets/Item 2.png";
    
                let item3 = document.createElement('img');
                item3.src = "./assets/Item 3.png";
    
                itemsContainer.append(item1, item2, item3); // Append items to container div
            } else pl = "Player " + i;

            p.append(pl);
            p.classList.add('ml-2')
            div.append(p);
            div.append(itemsContainer)
            div.classList.add('border-2', 'border-red-500', 'rounded-md')
            players.append(div)
        }
    }
}