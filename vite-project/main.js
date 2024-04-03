import './style.css'

import { Game } from './game';
import { PlayersMenu } from './playersMenu';
import { Timer } from './timer';

const playersMenu = new PlayersMenu();
const timer = new Timer();
const main = document.querySelector('main');
const fixed = document.querySelector('#fixed');
const loginDiv = document.querySelector('#login');

const howMany = document.createElement('p');

export function login(){
    const buttons = document.createElement('div');
    
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
        button.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 
            'rounded-md', 'hover:scale-110');

        button.addEventListener('click', () => {
            names();
        });
    });

    howMany.textContent = "How many players do u want to play with?";
    howMany.classList.add('font-bold', 'text-3xl', 'mb-4', 'text-center', 'text-black');

    loginDiv.append(howMany);
    loginDiv.append(buttons);
}

login();    

export function names(){
    loginDiv.remove(howMany);
    const namesPar = document.createElement('p');
    namesPar.append('Please, write your names!');
    loginDiv.append(namesPar);
    let playersCount = 0;
    loginDiv.querySelectorAll('button').forEach((button, index) => {
        playersCount = index + 1;

        loginDiv.remove(button)
        const input = document.createElement('input');
        input.setAttribute('id', `${index}`)
        loginDiv.append(input);
    });

    const start = document.createElement('button');
    start.textContent = 'Start';
    start.addEventListener('click', () => {
        loginDiv.classList.add('invisible');
        main.classList.remove('blur-sm');
        fixed.classList.remove('blur-sm')

        playersMenu.generateDivs(playersCount);
        const game = new Game(playersCount);
        game.movePlayer();
        timer.startTimer();
    });

    loginDiv.append(start);
}