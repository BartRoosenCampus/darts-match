"use strict";

import {DartGame} from "./classes/DartGame.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered!', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

const page = {
    startAtButtons: document.querySelectorAll(".start_at"),
    bestOfButtons: document.querySelectorAll(".best_of"),
    playerFields: document.querySelectorAll(".player"),
    bullWinnerButtons: document.querySelectorAll(".bull_winner"),
    key_pad_keys: document.querySelectorAll(".key_pad_key"),
    gameOn: document.getElementById("game_on"),
    bull_panel: document.getElementById("bull_panel"),
    select_player_1: document.getElementById("select_player_1"),
    select_player_2: document.getElementById("select_player_2"),
    settings_panel: document.getElementById("settings_panel"),
    bull_player_1: document.getElementById("bull_player_1"),
    bull_player_2: document.getElementById("bull_player_2"),
    game_panel: document.getElementById("game_panel"),
    bull_winner: document.getElementById("bull_winner"),
    bull_lozer: document.getElementById("bull_lozer"),
    key_pad_screen: document.getElementById("key_pad_screen"),
}

const dartGame = new DartGame(page);





const test = document.getElementById('test');

test.addEventListener('click', e => {
    dartGame.selectStartAt();
    console.log(dartGame);
});