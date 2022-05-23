const R = require('ramda');
class Player {
    #tokenPosition;
    #userId;
    #turns;

    constructor(player) {
        const {userId} = player;
        this.#tokenPosition = 0;
        this.#userId = userId;
        this.#turns = [];
    }

    get userId() {
        return this.#userId;
    }

    set userId(value) {
        this.#userId = value;
    }

    get tokenPosition() {
        return this.#tokenPosition;
    }

    set tokenPosition(value) {
        this.#tokenPosition = value;
    }

    get turns() {
        return this.#turns;
    }

    set turns(value) {
        this.#turns = value;
    }

    getRolls() {
        return R.filter(move => move.type === 'dieRoll', R.unnest(this.#turns))
    }

    getMoves() {
        return R.unnest(this.#turns);
    }

    getSlides() {
        let slidesByPlayer = [];
        for (let move of this.getMoves()) {
            if (move.type === 'slide') {
                slidesByPlayer.push(move.startPosition - move.endPosition);
            }
        }
        console.log(`Slides by player ${this.#userId}: `, slidesByPlayer);
        return slidesByPlayer;
    }

    getClimbs() {
        let climbsByPlayer = [];
			for (let move of this.getMoves()) {
				if (move.type === 'climb') {
					climbsByPlayer.push(move.endPosition - move.startPosition);
				}
			}
			console.log(`Climbs by player ${this.#userId}: `, climbsByPlayer);
			return climbsByPlayer;
    }

    getBiggestClimbInSingleTurn () {
        let biggestClimbInSingleTurn = 0;
			for (let turn of this.turns) {
				let climbInTurn = 0;
				if (Array.isArray(turn)) {
					climbInTurn = R.last(turn).endPosition - R.head(turn).startPosition;
				} else {
					climbInTurn = turn.endPosition - turn.startPosition;
				}
				if (climbInTurn > biggestClimbInSingleTurn) {
					biggestClimbInSingleTurn = climbInTurn;
				}
			}
			console.log(`Biggest climb (in single turn) by player ${this.#userId}: `, biggestClimbInSingleTurn);
			return biggestClimbInSingleTurn;
    }

    getBiggestSlideInSingleTurn() {
        let biggestSlideByPlayer = 0;
			for (let turn of this.turns) {
				let slideInTurn = 0;
				if (Array.isArray(turn)) {
					slideInTurn = R.head(turn).startPosition - R.last(turn).endPosition;
				} else {
					slideInTurn = turn.startPosition - turn.endPosition;
				}
				if (slideInTurn > biggestSlideByPlayer) {
					biggestSlideByPlayer = slideInTurn;
				}
			}
			console.log(`Biggest slide (in single turn) by player ${this.#userId}: `, biggestSlideByPlayer);
			return biggestSlideByPlayer;
    }

    getLongestTurn() {
        let longestTurnByPlayer = [];
			for (let turn of this.turns) {
				if (Array.isArray(turn)) {
					const turnRolls = R.pluck('dieResult', R.filter(move => move.type === 'dieRoll', turn))
					if (turnRolls.length > longestTurnByPlayer.length) {
						longestTurnByPlayer = [...turnRolls];
					}
				}
			}
			if (longestTurnByPlayer.length === 0) {
				longestTurnByPlayer.push(R.head(this.turns).dieResult);
			}
			console.log(`Longest turn by player ${this.#userId}: `, longestTurnByPlayer);
			return longestTurnByPlayer;
    }

    getUnluckyRolls() {
        let unluckyRollsByPlayer = R.filter(move => move.type === 'slide', this.getMoves()).length;
			console.log(`Unlucky rolls by player ${this.userId}: `, unluckyRollsByPlayer);
			return unluckyRollsByPlayer;
    }

    getLuckyRolls(snakes) {
        let luckyRollsByPlayer = 0;
			const moves = this.getMoves();
			for (let i=0; i < moves.length - 1; i++) {
				if (moves[i].type === 'dieRoll') {
					if (moves[i + 1].type === 'climb' 
					|| (moves[i].endPosition === 94 && moves[i + 1].endPosition === 100)
					|| (moves[i + 1].type !== 'slide' && moves[i].didMissASnake(snakes))) {
						luckyRollsByPlayer ++;
					}
				}
					
			}
			console.log(`Lucky rolls by player ${this.userId}: `, luckyRollsByPlayer);
			return luckyRollsByPlayer;
    }

    addTurn(turn) {
        turn.length === 1 ? this.#turns.push(...turn) : this.#turns.push(turn);
    }

}

module.exports = Player;