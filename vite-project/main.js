import './style.css'

import { Board } from './board'
import { Player } from './player';
import { PlayersMenu } from './playersMenu';

const board = new Board();
const player = new Player();
const playersMenu = new PlayersMenu();

//board.render();
playersMenu.generateDivs();
player.movePlayer();

