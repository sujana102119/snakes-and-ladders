const { SIMULATION_CONFIG, GAME_CONFIG} = require('../config');
const Simulation = require('./models/Simulation');


const simulator = () => {
	try {
		const { NUMBER_OF_SIMULATIONS} = GAME_CONFIG;
		for (let i=0; i < NUMBER_OF_SIMULATIONS; i++) {
			const simulation = new Simulation(SIMULATION_CONFIG);
			simulation.run();
		}
	} catch (error) {
		console.error(`Error in simulator`, error);
	}
};

simulator();
console.log('OSSR SMPS');