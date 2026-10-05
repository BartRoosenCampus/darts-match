"use strict";

import {Player} from "./Player.js";
import {Game} from "./Game.js";

export class DartGame {
    page;
    startAt = 501; // default 501
    bestOf = 5 // default 5
    teams = [
        "Select a team", "ASTmaplezantis", "DC Abri", "DC De Twerrekers", "DC De Dikken Beer", "Den Hiejete Pijl 1", "Den Hiejete Pijl 2",
        "Den Travoo", "Den Travoo Pigeons", "Het Windmoleke", "Het Windmoleke 2", "The Hoekers"
    ];
    player_1 = null;
    player_2 = null;
    player_to_start = null;

    game = null;

    constructor(page) {
        this.page = page;

        this.setEventListeners();
        this.createTeamSelects();
    }

    createTeamSelects() {
        for (const player of ["player_1", "player_2"]) {
            const select = this.createSelect(player);
            select.addEventListener("change", (e) => {
                e.preventDefault();

                if (select.id === "player_1" ) this.player_1 = select.value;
                else if (select.id === "player_2" ) this.player_2 = select.value;

                if (this.player_1 === this.player_2) {
                    alert("Teams must be different!");
                    select.value = "Select a team";
                }
            })

            if (player === "player_1") {
                this.page.getElements().select_player_1.append(select);
            }
            else if (player === "player_2") {
                this.page.getElements().select_player_2.append(select);
            }
        }
    }

    createSelect(player) {
        const select = document.createElement("select");
        select.id = player;
        for (const team of this.teams) {
            const option = document.createElement("option");
            option.value = team;
            option.textContent = team;
            select.appendChild(option);
        }

        return select;
    }

    setEventListeners() {
        for (const button of this.page.getElements().startAtButtons) {
            button.addEventListener('click', () => {
                this.selectStartAt(button);
            });
        }

        for (const button of this.page.getElements().bestOfButtons) {
            button.addEventListener('click', () => {
                this.selectBestOf(button);
            });
        }

        this.page.getElements().gameOn.addEventListener("click", () => {
            this.gameOn();
        });

        for (const keyPadKey of this.page.getElements().key_pad_keys) {
            keyPadKey.addEventListener('click', () => {

                if ("B" === keyPadKey.dataset.number) {
                    this.page.getElements().key_pad_screen.innerText = this.page.getElements().key_pad_screen.innerText.slice(0, -1);
                } else if ("E" === keyPadKey.dataset.number) {
                    if ("" === this.page.getElements().key_pad_screen.innerText) {
                        this.page.getElements().key_pad_screen.innerText = 0;
                    }
                } else {
                    this.page.getElements().key_pad_screen.innerText = `${this.page.getElements().key_pad_screen.innerText}${keyPadKey.dataset.number}`;
                }
            });
        }
    }

    gameOn() {
        if (null === this.player_1 || null === this.player_2) {
            alert("Select 2 teams");
            return;
        }

        if (this.player_1 === this.player_2) {
            alert("You must select two different teams");
            return;
        }

        this.page.getElements().bull_player_1.dataset.name = this.player_1;
        this.page.getElements().bull_player_2.dataset.name = this.player_2;
        this.page.getElements().bull_player_1.innerText = this.player_1;
        this.page.getElements().bull_player_2.innerText = this.player_2;
        this.page.getElements().bull_panel.classList.toggle("noShow");
        this.page.getElements().settings_panel.classList.toggle("noShow");

        for (const button of this.page.getElements().bullWinnerButtons) {
            button.addEventListener("click", () => {
                const bullWinner = button.dataset.name;
                this.game = new Game(Date.now(), this.startAt, this.bestOf);

                this.game.addPlayer(new Player(bullWinner, true));
                this.game.addPlayer(new Player(
                    (this.player_1 === bullWinner) ? this.player_2 : this.player_1,
                    false
                ));
                this.page.togglePanels();

                console.log(this);
            });
        }
    }

    selectStartAt(startAtButton) {
        for (const button of this.page.getElements().startAtButtons) {
            button.classList.remove("default");
        }

        this.startAt = startAtButton.dataset.startAt;
        startAtButton.classList.add("default");
    }

    selectBestOf(bestOfButton) {
        for (const button of this.page.getElements().bestOfButtons) {
            button.classList.remove("default");
        }

        this.bestOf = bestOfButton.dataset.bestOf;
        bestOfButton.classList.add("default");
    }
}