import './style.css'

import { Game } from './game';
import { PlayersMenu } from './playersMenu';
import { Timer } from './timer';
import { Board } from './board';

const board = new Board();
const playersMenu = new PlayersMenu();
const timer = new Timer();

const main = document.querySelector('main');
const fixed = document.querySelector('#fixed');
const loginDiv = document.querySelector('#login');

const howMany = document.createElement('p');

export function login(){
    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');
    
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
            names(playerCount);
        });
    });

    howMany.textContent = "How many players do u want to play with?";
    howMany.classList.add('font-bold', 'text-3xl', 'mb-4', 'text-center', 'text-black');

    loginDiv.append(howMany);
    loginDiv.append(buttons);
}

login();    

export function names(playerCount){
    loginDiv.classList.add('flex', 'h-auto');
    
    loginDiv.removeChild(howMany);

    const namesPar = document.createElement('p');
    namesPar.classList.add('text-center', 'text-black', 'font-bold', 'pb-4', 'pt-4');
    namesPar.append('Please, write your names!');
    
    loginDiv.removeChild(loginDiv.querySelector('#buttons'));
    
    const inputs = document.createElement('div');
    inputs.classList.add('flex', 'flex-col', 'gap-4', 'mb-4', 'items-center', 'bg-amber-300');
    
    for(let i = 0; i < playerCount; i++){
        const input = document.createElement('input');
        input.classList.add('bg-amber-100', 'p-2', 'rounded-md', 'text-black', 'text-center');
        input.setAttribute('id', `${i}`);
        input.setAttribute('placeholder', `Player ${i + 1}`);
        inputs.append(input);
    }
    
    const start = document.createElement('button');
    start.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md', 'hover:scale-110');
    start.textContent = 'Start';
    start.addEventListener('click', () => {
        loginDiv.classList.add('invisible');
        main.classList.remove('blur-sm');
        fixed.classList.remove('blur-sm')
        let names = [];
        document.querySelectorAll('input').forEach((input) => {input.value ? names.push(input.value) : 
            names.push(`Player ${input.id}`)});

        playersMenu.generateDivs(playerCount, names);
        const game = new Game(playerCount, names);
        game.movePlayer();
        timer.startTimer();
    });
    
    loginDiv.append(namesPar);
    loginDiv.append(inputs);
    loginDiv.append(start);
}