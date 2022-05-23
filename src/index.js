const { SIMULATION_CONFIG, GAME_CONFIG} = require('../config');
const Game = require('./models/Game');
const Stats = require('./models/Stats');

const simulator = () => {
	try {
		const games = [];
		const { NUMBER_OF_SIMULATIONS} = SIMULATION_CONFIG;
		for (let i=0; i < NUMBER_OF_SIMULATIONS; i++) {
			const game = new Game(GAME_CONFIG);
			game.start();
			games.push(game);
		}
		const statsForGames = new Stats(games);
		statsForGames.getStats(games);
	} catch (error) {
		console.error(`Error in simulator`, error);
	}
};

simulator();
console.log('OSSR SMPS');