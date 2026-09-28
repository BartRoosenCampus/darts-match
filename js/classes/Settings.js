"use strict";

export class Settings {
    player_1 = null;
    player_2 = null;
    start_score = 501;
    best_of = 5;
    startAtButtons;
    bestOfButtons;
    playerFields;
    gameOn;

    constructor() {
        this.startAtButtons = document.getElementsByClassName("start_at");
        this.bestOfButtons = document.getElementsByClassName("best_of");
        this.playerFields = document.getElementsByClassName("player");
        this.gameOn = document.getElementById("game_on");
        this.addEventListeners();
    }

    // getters
    getStartScore() {
        return this.start_score;
    }

    getBestOf() {
        return this.best_of;
    }

    getPlayerName(player) {
        if (player === 1) {
            return this.player_1;
        } else if (player === 2) {
            return this.player_2;
        }

        return null;
    }

    addEventListeners() {
        for (const startAtButton of this.startAtButtons) {
            startAtButton.addEventListener("click", () => {
                this.setStartAtValue(startAtButton);
            });
        }

        for (const bestOfButton of this.bestOfButtons) {
            bestOfButton.addEventListener("click", () => {
                this.setBestOfValue(bestOfButton);
            });
        }

        for (const playerField of this.playerFields) {
            playerField.addEventListener("keyup", () => {
                if (playerField.dataset.id === "player_1") {
                    this.player_1 = playerField.value;
                } else {
                    this.player_2 = playerField.value;
                }
            });
        }

        this.gameOn.addEventListener("click", () => {
            if (null === this.player_1 || null === this.player_2) {
                alert('Je moet ploeg -of spelersnamen invullen!');
                return;
            }

            console.log(this);
        });
    }

    setStartAtValue(startAtButton) {
        for (const button of this.startAtButtons) {
            button.classList.remove("default");
        }

        startAtButton.classList.add("default");
        this.start_score = startAtButton.dataset.startAt;
    }

    setBestOfValue(bestOfButton) {
        for (const button of this.bestOfButtons) {
            button.classList.remove("default");
        }

        bestOfButton.classList.add("default");
        this.best_of = bestOfButton.dataset.bestOf;
    }
 }