"use strict";

export class Page {
    elements = {
        startAtButtons: document.querySelectorAll(".start_at"),
        bestOfButtons: document.querySelectorAll(".best_of"),
        playerFields: document.querySelectorAll(".player"),
        bullWinnerButtons: document.querySelectorAll(".bull_winner"),
        key_pad_keys: document.querySelectorAll(".key_pad_key"),
        panels: document.querySelectorAll(".panel"),
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

    getElements() {
        return this.elements;
    }

    showPanel(panel) {
        for (const panel of this.elements.panels) {
            if (!panel.classList.contains("noShow")) panel.classList.add("noShow");
        }

        this.elements[panel].classList.remove("noShow");
    }
}