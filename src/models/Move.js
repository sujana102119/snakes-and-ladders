const R = require('ramda');
class Move {
    startPosition;
    endPosition;
    type;
    dieResult;

    constructor(startPosition, type='', dieResult = 0) {
        this.startPosition = startPosition;
        this.endPosition = startPosition;
        this.type = type,
        this.dieResult = dieResult;
    }

    get dieResult() {
        return this.dieResult;
    }

    set dieResult(value) {
        this.dieResult = value;
    }

    get startPosition() {
        return this.startPosition;
    }

    set startPosition(value) {
        this.startPosition = value;
    }

    get type() {
        return this.type;
    }

    set type(value) {
        this.type = value;
    }

    get endPosition() {
        return this.endPosition;
    }

    set endPosition(value) {
        this.endPosition = value;
    }

    didMissASnake = (snakes) => {
        const snakeHeads = R.sort((a, b) => a - b, R.pluck('head', snakes));
        for (let snakeHead of snakeHeads) {
            if (this.startPosition < snakeHead && (Math.abs(this.endPosition - snakeHead) <= 2) ) {
                return true;
            }
            if (snakeHead - this.startPosition > 2 ) {
                break;
            }
        }
        return false;
    }
}

module.exports = Move;