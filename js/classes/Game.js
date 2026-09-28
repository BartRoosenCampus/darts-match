"use strict";

export class Game {
    settings;
    gameId;
    bull_panel = document.getElementById("bull_panel");

    constructor(settings) {
        this.settings = settings;
        this.gameId = Date.now();
    }

    createBullButtons() {
        for (let i = 1; i <= 2; i++) {
            const button = document.createElement("button");
        }
        button_1.classList.add("settings-btn");
        button_1.innerHTML = this.settings.getPlayerName(1);
    }
}