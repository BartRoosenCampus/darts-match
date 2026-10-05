"use strict";

export class GameSettings {
    startAt = 501;
    bestOf = 5;
    teams = [
        "Select a team", "ASTmaplezantis", "DC Abri", "DC De Twerrekers", "DC De Dikken Beer", "Den Hiejete Pijl 1",
        "Den Hiejete Pijl 2", "Den Travoo", "Den Travoo Pigeons", "Het Windmoleke", "Het Windmoleke 2", "The Hoekers",
        "DC De Hunters"
    ];

    createTeamSelect(id) {
        const select = document.createElement("select");
        select.id = id;

        for (const team of this.teams) {
            const option = document.createElement("option");
            option.value = team;
            option.textContent = team;
            select.appendChild(option);
        }
    }
}