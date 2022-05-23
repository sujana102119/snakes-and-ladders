const { generateRandomNatualNumber } = require('../lib/utils');
const Player = require('./Player');
const Move = require('./Move');
const R = require('ramda');
class Game {

    // ---------- PRIVATE  FIELDS ----------------
    // size of the board i.e total no. of squares on the baord
    #boardSize;

    // positions of snakes on the board
    #snakes;

    // positions of ladders on the board
    #ladders

    // players
    #players;

    // -----------------------------------------------------
    
    get players() {
        return this.#players;
    }

    get boardSize() {
        return this.#boardSize;
    }

    // ------------ CONSTRUCTOR --------------------

    constructor(configuration) {
        const { boardSize, snakes, ladders, players} = configuration; 
        this.#boardSize = boardSize;
        this.#snakes = snakes;
        this.#ladders = ladders;
        this.#players = [];
        players.forEach(player => this.#players.push(new Player(player)));
    }

    // ------------- PRIVATE STATIC METHODS -------------

    // return result of rolling die
    static #rollDie = () => generateRandomNatualNumber(6);

    #isValid = () => {
        // use Joi validator
        // check start < end for ladder and inversely for snake
        // check only one snake/ladder at a position
        return true;
    };

    // -------------PRIVATE INSTANCE METHODS --------------

    // return new position based on the presence of snake or ladder at the given position
    #handleSnakeAndLadder = (position, player) => {
        let newPosition = position;
        const playerMove = new Move(position);
    
        try {
            // check if there is a snake at the given position
            const snake = this.#snakes.find(snake => snake.head === position);
            if (snake) { 
                // move token down to position of snake's tail
                newPosition = snake.tail;  
                playerMove.type = 'slide';
            } else {
                // check if there is a ladder at the given position
                const ladder = this.#ladders.find(ladder => ladder.bottom === position);
                if (ladder) {
                    // move token up to position of ladder's top
                    newPosition = ladder.top;  
                    playerMove.type = 'climb';
                }
            }
            playerMove.endPosition = newPosition;
        } catch (error) {
            console.log('Error in handleSnakeAndLadder', error);
            throw error;
        }
       
        return playerMove;
    }

    // ------------PUBLIC INSTANCE METHODS -------------------

    getRollsToWin() {
        const winner = this.#players.find(player => R.last(player.getMoves()).endPosition === this.#boardSize);
		const rollsToWinInGame = winner.getRolls().length;
		console.log(`Winner ${winner.userId} needed ${rollsToWinInGame} rolls to win`)
		return rollsToWinInGame;
    }

    getLuckyRolls() {
        const luckyRollsByPlayersInGame = this.#players.map(player => player.getLuckyRolls(this.#snakes));
		return luckyRollsByPlayersInGame;
    }

    getUnluckyRolls() {
        const unluckyRollsByPlayersInGame = this.#players.map(player => player.getUnluckyRolls());
		return unluckyRollsByPlayersInGame;
    }

    getLongestTurn() {
        const longestTurnByEachPlayerInGame = this.#players.map(player =>  player.getLongestTurn());
		return longestTurnByEachPlayerInGame;
    }

    getBiggestSlideInSingleTurn() {
        const biggestSlidesByPlayersInGame = this.#players.map(player => player.getBiggestSlideInSingleTurn());
		const biggestSlideIngame = Math.max(...biggestSlidesByPlayersInGame);
		return biggestSlideIngame;
    }

    getBiggestClimbInSingleTurn() {
        const biggestClimbsByPlayersInGame = this.#players.map(player => player.getBiggestClimbInSingleTurn());
		const biggestClimbIngame = Math.max(...biggestClimbsByPlayersInGame);
		return biggestClimbIngame;
    }

    getSlides() {
        const slidesDuringTheGame = R.unnest(this.#players.map(player => player.getSlides()));
		return slidesDuringTheGame;
    }

    getClimbs() {
        const climbsDuringTheGame = R.unnest(this.#players.map(player => player.getClimbs()));
		return climbsDuringTheGame;
    }

    // start game
    start = () => {

        if (this.#isValid()) {
           game: while(1) {
                for (let player of this.#players) {
                    let isDieResultSix = false;
                    const playerTurn = [];
                    do {
                        const playerMove = new Move(player.tokenPosition, 'dieRoll');
                        // roll the die  
                        const dieResult = Game.#rollDie();  
                        playerMove.dieResult = dieResult;

                        isDieResultSix = dieResult === 6;

                        // ensure player rolls exact number to reach the final square
                        if (player.tokenPosition + dieResult > this.#boardSize) {
                            playerMove.endPosition = player.tokenPosition;
                            playerTurn.push(playerMove);
                            continue; 
                        }

                        // move token forward based on result of die           
                        player.tokenPosition +=  dieResult;
                        playerMove.endPosition = player.tokenPosition;
                        playerTurn.push(playerMove);
                        // update token position based on the presence of snake or ladder at the current position
                        const moveBySnakeAndLader = this.#handleSnakeAndLadder(player.tokenPosition, player);
                        if (moveBySnakeAndLader.type) {
                            player.tokenPosition = moveBySnakeAndLader.endPosition;
                            playerTurn.push(moveBySnakeAndLader);
                        }
                        if (player.tokenPosition === this.#boardSize) {
                            break;
                        }
                    } while(isDieResultSix)
                    player.addTurn(playerTurn);
                    if (player.tokenPosition === this.#boardSize) {
                        break game;
                    }                
                }
            }

        } else {
            console.log('Invalid game configuration');
        }
    
    };


}

module.exports = Game;