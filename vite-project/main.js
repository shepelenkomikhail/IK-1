import './style.css'

import { Game } from './game';
import { PlayersMenu } from './playersMenu';
import { Timer } from './timer';
import { Board } from './board';

const board = new Board();
const playersMenu = new PlayersMenu();
const timer = new Timer();

const main = document.querySelector('main');
const timerDiv = document.querySelector('#timer');
const fixed = document.querySelector('#fixed');
const loginDiv = document.querySelector('#login');

const howMany = document.createElement('p');
const namesPar = document.createElement('p');

const buttons = document.createElement('div');
const inputs = document.createElement('div');

function login(){
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

function names(playerCount){
    loginDiv.classList.add('flex', 'h-auto');
    loginDiv.removeChild(howMany);

    namesPar.classList.add('text-center', 'text-black', 'font-bold', 'pb-4', 'pt-4');
    namesPar.append('Please, write your names!');
    namesPar.setAttribute('id', 'namesPar');
    
    loginDiv.removeChild(loginDiv.querySelector('#buttons'));
    
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
        startFunction(playerCount, collectNames());
        timer.startTimer();
    });

    const setTimerButton = document.createElement('button');
    setTimerButton.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md', 'hover:scale-110');
    setTimerButton.textContent = 'Set Timer';

    setTimerButton.addEventListener('click', () => { setTime(playerCount, collectNames()); });
    
    buttons.classList.add('flex', 'gap-4', 'items-center', 'flex-row', 'bg-amber-300');
    
    buttons.append(start, setTimerButton);
    loginDiv.append(namesPar);
    loginDiv.append(inputs);
    loginDiv.append(buttons);
}

function startFunction(playerCount, names) {
    loginDiv.classList.add('invisible');
        main.classList.remove('blur-sm');
        fixed.classList.remove('blur-sm');

        playersMenu.generateDivs(playerCount, names);
        const game = new Game(playerCount, names);
        game.movePlayer();
}

function setTime(playerCount, names){
    loginDiv.removeChild(buttons);
    loginDiv.removeChild(namesPar);
    loginDiv.removeChild(inputs);

    const timePar = document.createElement('p');
    timePar.classList.add('text-center', 'text-black', 'font-bold', 'pb-4', 'pt-4');
    timePar.append('Please, set a time for the game! (Max 15:59)');

    const timerDiv = document.createElement('div');
    timerDiv.classList.add('flex', 'flex-col', 'gap-4', 'items-center', 'bg-amber-300');
    
    const timeInput = document.createElement('div');
    timeInput.classList.add('flex', 'gap-4', 'items-center', 'm-2');

    const minInput = document.createElement('input');
    const secInput = document.createElement('input');

    minInput.setAttribute('type', 'number');
    minInput.setAttribute('placeholder', 'Minutes');
    minInput.setAttribute('min', '1');
    minInput.setAttribute('max', '15');
    minInput.setAttribute('value', '2');

    minInput.classList.add('bg-amber-100', 'rounded-md', 'text-black', 'text-center', 'w-40');

    secInput.setAttribute('type', 'number');
    secInput.setAttribute('placeholder', 'Seconds');
    secInput.setAttribute('min', '0');
    secInput.setAttribute('max', '59');
    secInput.setAttribute('value', '0');

    secInput.classList.add('bg-amber-100', 'rounded-md', 'text-black', 'text-center', 'w-40');

    const setTimeButton = document.createElement('button');
    setTimeButton.classList.add('bg-green-600', 'text-white', 'p-2', 'mb-4', 'rounded-md', 'hover:scale-110');
    setTimeButton.textContent = 'Set time and Start';
    setTimeButton.setAttribute('type', 'submit');

    setTimeButton.addEventListener('click', () => {
        if (!minInput.value) {
            alert('Please fill in both minutes and seconds!');
            return;
        }

        if (minInput.value < 0 || secInput.value < 0 || minInput.value > 15 || secInput.value > 59) {
            alert('Please, set a valid time!');
            return;
        }

        if(minInput.value < 1 ){alert('Please set a time greater then 1 min!'); return;}

        if(!secInput.value) secInput.value = 0;

        startFunction(playerCount, names);
        timerDiv.innerHTML = '';
        timer.setCountdown(minInput.value, secInput.value);
    });
    
    timeInput.append(minInput, secInput);
    timerDiv.append(timeInput, setTimeButton);
    loginDiv.append(timePar);
    loginDiv.append(timerDiv);
}

function collectNames(){
    let names = [];
        document.querySelectorAll('input').forEach((input) => {input.value ? names.push(input.value) : 
            names.push(`Player ${parseInt(input.id)+1}`)});
    return names;
}