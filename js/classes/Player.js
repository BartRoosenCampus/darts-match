"use strict";

export class Player {
    name;
    bullWinner = false;
    numberOfDarts = 0;
    throws = [];

    constructor(name, bullWinner) {
        this.name = name;
        this.bullWinner = bullWinner;
    }

    addThrow(id, score, numberOfDarts) {
        this.throws.push(
            {
                id: Date.now(),
                score: score,
                rest: 0
            }
        );
        this.numberOfDarts += numberOfDarts;
    }
}