import './style.css'

import { Board } from './board'
import { Player } from './player';
import { PlayersMenu } from './playersMenu';
import { Timer } from './timer';

const board = new Board();
const player = new Player();
const playersMenu = new PlayersMenu();
const timer = new Timer();

function login(){
    const main = document.querySelector('main');
    const timerelem = document.querySelector('#timer');

    const login = document.querySelector('#login');
    const buttons = document.createElement('div');
    const inputs = [];
    
    login.classList.add('w-1/2', 'h-1/4', 'bg-amber-300', 'text-white', 
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
        button.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md');
        button.addEventListener('click', () => {
            login.remove();
            main.classList.remove('blur-sm');
            timerelem.classList.remove('blur-sm');
            playersMenu.generateDivs(playerCount);
            player.movePlayer();
            timer.startTimer();
        });
    });

    const howMany = document.createElement('p');
    howMany.textContent = "How many players do u wanna play with?";
    howMany.classList.add('font-bold', 'text-3xl', 'mb-4', 'text-center', 'text-black');
    login.append(howMany);
    login.append(buttons);
}

//board.render();
login();