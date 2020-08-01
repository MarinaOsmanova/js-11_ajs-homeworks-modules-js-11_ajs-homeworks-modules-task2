console.log('app worked');

import '../css/styles.css';

const game = new Game();
game.start();

import GameSavingData, {Game, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';
