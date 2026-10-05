"use strict";

import {Page} from "./classes/Page.js";
import {DartGame} from "./classes/DartGame.js";
import {Player} from "./classes/Player.js";
import {Game} from "./classes/Game.js";
import {GameController} from "./classes/GameController.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered!', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

const gameController = new GameController();

console.log(gameController);
// gameController.nextStage();

// const page = new Page();
// const dartGame = new DartGame(page);
//
// const player1 = new Player("DHP 1", true);
// const player2 = new Player("DHP 2", false);
// const game = new Game(Date.now(), 501, 5);

// game.addPlayer(player1);
// game.addPlayer(player2);
