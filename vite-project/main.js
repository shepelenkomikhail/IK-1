import './style.css'

import { Board } from './board'
import { Game } from './game';
import { PlayersMenu } from './playersMenu';
import { Timer } from './timer';

const board = new Board();
const playersMenu = new PlayersMenu();
const timer = new Timer();

export function login(){
    const main = document.querySelector('main');
    const timerelem = document.querySelector('#timer');

    const loginDiv = document.querySelector('#login');

    if(loginDiv.classList.contains('invisible')) loginDiv.classList.remove('invisible');
    const buttons = document.createElement('div');
    const inputs = [];
    
    loginDiv.classList.add('w-1/2', 'h-1/4', 'bg-amber-300', 'text-white', 
    'text-2xl', 'flex', 'justify-center', 'items-center', 'rounded-lg', 
    'fixed', 'left-1/4', 'top-1/4' , 'transform', 'absolute', 'z-10', 'flex-col', 'opacity-90');

    const b1 = document.createElement('button');
    const b2 = document.createElement('button');
    const b3 = document.createElement('button');
    const b4 = document.createElement('button');

    buttons.append(b1, b2, b3, b4);

    buttons.querySelectorAll('button').forEach((button, index) => {
        const playerCount = index + 1;
        button.textContent = `${playerCount} Player(s)`;
        button.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md', 'hover:scale-110');
        button.addEventListener('click', () => {
            loginDiv.classList.add('invisible');
            main.classList.remove('blur-sm');
            timerelem.classList.remove('blur-sm');
            playersMenu.generateDivs(playerCount);
            const game = new Game(playerCount);
            game.movePlayer();
            timer.startTimer();
            //board.render();
        });
    });

    const howMany = document.createElement('p');
    howMany.textContent = "How many players do u wanna play with?";
    howMany.classList.add('font-bold', 'text-3xl', 'mb-4', 'text-center', 'text-black');
    loginDiv.append(howMany);
    loginDiv.append(buttons);
}

//board.render();
login();    