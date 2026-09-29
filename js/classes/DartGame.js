"use strict";

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
    bull_winner_id = null;
    bull_lozer_id = null;

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
                this.page.select_player_1.append(select);
            }
            else if (player === "player_2") {
                this.page.select_player_2.append(select);
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
        for (const button of this.page.startAtButtons) {
            button.addEventListener('click', () => {
                this.selectStartAt(button);
            });
        }

        for (const button of this.page.bestOfButtons) {
            button.addEventListener('click', () => {
                this.selectBestOf(button);
            });
        }

        this.page.gameOn.addEventListener("click", () => {
            this.gameOn();
        });
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

        this.page.bull_player_1.dataset.id = this.player_1;
        this.page.bull_player_2.dataset.id = this.player_2;
        this.page.bull_player_1.innerText = this.player_1;
        this.page.bull_player_2.innerText = this.player_2;
        this.page.bull_panel.classList.toggle("noShow");
        this.page.settings_panel.classList.toggle("noShow");

        for (const button of this.page.bullWinnerButtons) {
            button.addEventListener("click", () => {
                this.player_to_start = button.dataset.id;
                this.createGame();
            });
        }
    }

    selectStartAt(startAtButton) {
        for (const button of this.page.startAtButtons) {
            button.classList.remove("default");
        }

        this.startAt = startAtButton.dataset.startAt;
        startAtButton.classList.add("default");
    }

    selectBestOf(bestOfButton) {
        for (const button of this.page.bestOfButtons) {
            button.classList.remove("default");
        }

        this.bestOf = bestOfButton.dataset.bestOf;
        bestOfButton.classList.add("default");
    }

    createGame() {
        this.page.bull_panel.classList.toggle("noShow");
        this.page.game_panel.classList.toggle("noShow");
        localStorage.setItem('current_game', (Date.now()).toString());

        this.bull_winner_id = ((this.player_1 === this.player_to_start) ? this.player_1 : this.player_2).replaceAll(/\s+/g, '');
        this.bull_lozer_id = ((this.player_2 === this.player_to_start) ? this.player_1 : this.player_2).replaceAll(/\s+/g, '');

        const nameTag = document.createElement("div");
        nameTag.id = this.bull_winner_id;
        nameTag.innerText = (this.player_1 === this.player_to_start) ? this.player_1 : this.player_2;
        this.page.bull_winner.append(nameTag);
        const scoreTag = document.createElement("div");
        scoreTag.classList.add("score");
        scoreTag.innerText = this.startAt;
        this.page.bull_winner.append(scoreTag);

        const nameTag2 = document.createElement("div");
        nameTag2.id = this.bull_lozer_id;
        nameTag2.innerText = (this.player_2 === this.player_to_start) ? this.player_1 : this.player_2;
        this.page.bull_lozer.append(nameTag2);
    }
}