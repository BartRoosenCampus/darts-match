"use strict";

import {Page} from "./Page.js";
import {DartGame} from "./DartGame.js";
import {Player} from "./Player.js";
import {Game} from "./Game.js";
import {GameSettings} from "./GameSettings.js";

export class GameController {
    // stage 1: fill out settings
    // stage 2: who wins the bull
    // stage 3: game on, lat's play some darts
    page;
    gameSettings;
    constructor() {
        this.page = new Page();
        this.gameSettings = new GameSettings();
        this.getStage();
        this.showPanel();
    }

    getStage() {
        if (null === localStorage.getItem("stage")) {
            this.setStage(1);
            this.getStage();
        } else {
            return parseInt(localStorage.getItem("stage"));
        }
    }

    setStage(stage) {
        localStorage.setItem("stage", stage);
    }

    nextStage(up = true) {
        const currentStage = this.getStage();

        if ((up && currentStage < 3) || (!up && currentStage > 1)) {
            localStorage.setItem("stage", currentStage + (up ? 1 : -1));
        }

        this.showPanel(this.getStage());
    }

    showPanel() {
        switch (this.getStage()) {
            case 1:
                this.page.showPanel('settings_panel');
                break;
            case 2:
                this.page.showPanel('bull_panel');
                break;
            default:
                this.page.showPanel('game_panel');
        }
    }

    storeSettings() {
        localStorage.setItem("gameOnSettings", JSON.stringify(this.gameSettings));
    }
}