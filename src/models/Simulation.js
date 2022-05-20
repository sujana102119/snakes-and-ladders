const { generateRandomNatualNumber } = require('../lib/utils');
const Player = require('../models/Player');
class Simulation {

    // ---------- PRIVATE  FIELDS ----------------
    // size of the board i.e total no. of squares on the baord
    #boardSize;

    // positions of snakes on the board
    #snakes;

    // positions of ladders on the board
    #ladders

    // players
    #players;
    
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
    #handleSnakeAndLadder = (position) => {
        let newPosition = position;
    
        try {
            // check if there is a snake at the given position
            const snake = this.#snakes.find(snake => snake.head === position);
            if (snake) { 
                console.log(`Snake with head at ${snake.head} and tail at ${snake.tail}`);
                // move token down to position of snake's tail
                newPosition = snake.tail;  
            } else {
                // check if there is a ladder at the given position
                const ladder = this.#ladders.find(ladder => ladder.bottom === position);
                if (ladder) {
                    console.log(`Ladder with bottom at ${ladder.bottom} and top at ${ladder.top}`);
                    // move token up to position of ladder's top
                    newPosition = ladder.top;  
                }
            }
        } catch (error) {
            console.log('Error in handleSnakeAndLadder', error);
            throw error;
        }
       
        return newPosition;
    }

    // execute simulation
    run = () => {

        if (this.#isValid()) {
           game: while(1) {
                for (let player of this.#players) {
                    let isDieResultSix = false;
                    do {
                        // roll the die  
                        const dieResult = Simulation.#rollDie();   
                        console.log(`Die roll for ${player.userId} :: ${dieResult}`); 

                        isDieResultSix = dieResult === 6;

                        // ensure player rolls exact number to reach the final square
                        if (player.tokenPosition + dieResult > this.#boardSize) {
                            continue; 
                        }

                        // move token forward based on result of die           
                        player.tokenPosition +=  dieResult;
                        // update token position based on the presence of snake or ladder at the current position
                        player.tokenPosition = this.#handleSnakeAndLadder(player.tokenPosition);

                        console.log(`${player.userId} now at ${player.tokenPosition}`);

                        if (player.tokenPosition === this.#boardSize) {
                            console.log(`${player.userId} won`);
                            break game;
                        }
                    } while(isDieResultSix)                    
                }
            }

        } else {
            console.log('Invalid simulation configuration');
        }
    
    };


}

module.exports = Simulation;