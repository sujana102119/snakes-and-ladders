const {getMinMaxAvg} = require('../lib/utils');
const R = require('ramda');

class Stats {
    #games;

    constructor(games) {
        this.#games = games;
    }

    
   #getStatsForRollsToWin = () => {
        console.log('-------------------- STATS FOR ROLLS TO WIN ----------------------------');
        const rollsToWin = this.#games.map((game, index) => {
            console.log(`Game ${index + 1}:`)
            return game.getRollsToWin();
        })
        const stats = getMinMaxAvg(rollsToWin);
        console.log(`OVERALL: Rolls to win ${JSON.stringify(stats)}`);
    }

    #getStatsForClimbs = () => {
        console.log('-------------------- STATS FOR CLIMBS ----------------------------');
        const allClimbs = R.unnest(this.#games.map((game, index) => {
            console.log(`Game ${index + 1}`)
            return game.getClimbs();
        }));
        console.log('OVERALL Climb Stats (Across all games)')
        const stats = getMinMaxAvg(allClimbs);
        console.log(JSON.stringify(stats));
    }

    #getStatsForSlides = () => {
        console.log('-------------------- STATS FOR SLIDES ----------------------------');
        const allslides = R.unnest(this.#games.map((game, index) => {
            console.log(`Game ${index + 1}`)
            return game.getSlides();
        }));
        console.log('OVERALL Slide Stats (Across all games)')
        const stats = getMinMaxAvg(allslides);
        console.log(JSON.stringify(stats));
    }

    #getBiggestClimbInSingleTurn = () => {
        console.log('--------------------- STATS FOR BIGGEST CLIMB IN A SINGLE TURN --------------');
        const biggestClimbsFromAllGames = this.#games.map((game, index) =>  {
            console.log(`Game ${index + 1}`);
            return game.getBiggestClimbInSingleTurn();
        })
        const biggestOfAllClimbs = Math.max(...biggestClimbsFromAllGames);
        console.log(`OVERALL Biggest Climb in a single turn: `, biggestOfAllClimbs);
    }

    #getBiggestSlideInSingleTurn = () => {
        console.log('--------------------- STATS FOR BIGGEST SLIDE IN A SINGLE TURN --------------');
        const biggestSlidesFromAllGames = this.#games.map((game, index) =>  {
            console.log(`Game ${index + 1}`);
            return game.getBiggestSlideInSingleTurn();
        })
        const biggestOfAllSlides = Math.max(...biggestSlidesFromAllGames);
        console.log(`OVERALL Biggest Slide in a single turn: `, biggestOfAllSlides);
    }

    #getLongestTurn = () => {
        console.log('--------------- STATS FOR LONGEST TURN ----------------');
        const longestTurnByPlayersFromAllGames = R.unnest(this.#games.map((game, index) => {
            console.log(`Game ${index + 1}`);
            return game.getLongestTurn();
        }));

        let longestOfAllTurns = [];
        for (let turn of longestTurnByPlayersFromAllGames) {
            if (turn.length > longestOfAllTurns.length) {
                longestOfAllTurns = [...turn];
            }
        }
        console.log(`OVERALL Longest Turn: ${longestOfAllTurns}`)
    }

    #getStatsForUnluckyRolls = () => {
        console.log('--------------- STATS FOR UNLUCKY ROLLS ----------------');
        const unluckyRollsAcrossAllGames = R.unnest(this.#games.map((game, index) => {
            console.log(`Game ${index + 1}`)
            return game.getUnluckyRolls();
        }));
        const stats = getMinMaxAvg(unluckyRollsAcrossAllGames);
        console.log('OVERALL STATS (Across all games) for Unlucky Rolls: ', JSON.stringify(stats))
    }

    #getStatsForLuckyRolls = () => {
        console.log('--------------- STATS FOR LUCKY ROLLS ----------------');
        const luckyRollsAcrossAllGames = R.unnest(this.#games.map((game, index) => {
            console.log(`Game ${index + 1}`);
            return game.getLuckyRolls();
        }));
        const stats = getMinMaxAvg(luckyRollsAcrossAllGames);
        console.log('OVERALL STATS (Across all games) for Lucky Rolls: ', JSON.stringify(stats))
    }


    getStats = () => {
        this.#getStatsForRollsToWin();
        this.#getStatsForClimbs();
        this.#getStatsForSlides();
        this.#getBiggestClimbInSingleTurn();
        this.#getBiggestSlideInSingleTurn();
        this.#getLongestTurn();
        this.#getStatsForUnluckyRolls();
        this.#getStatsForLuckyRolls();
    }
}

module.exports = Stats;