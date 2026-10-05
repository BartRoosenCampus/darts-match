"use strict";

export class Game {
    id;
    gameSettings = null;
    leg = 1;
    players = [];
    bullWinnersTurn = true;

    addGameSettings(gameSettings) {
        this.gameSettings = gameSettings;
    }
    addPlayer(player) {
        this.players.push(player);
    }
}