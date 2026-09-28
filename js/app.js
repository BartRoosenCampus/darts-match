"use strict";

import {Settings} from "./classes/Settings.js";
import {Game} from "./classes/Game.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered!', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

const settings = new Settings();
const game = new Game(settings);

const test = document.getElementById('test');

test.addEventListener('click', e => {
    console.log(game);
});