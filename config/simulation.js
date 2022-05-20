const simulation = {
	boardSize: 100,
	additionalRollOn6: true,
	snakes: [
		{
			head: 40,
			tail: 3
		},
		{
			head: 27,
			tail: 5
		},
		{
			head: 43,
			tail: 18
		},
		{
			head: 54,
			tail: 31
		},
		{
			head: 66,
			tail: 45
		},
		{
			head: 76,
			tail: 58
		},
		{
			head: 99,
			tail: 41
		},
		{
			head: 89,
			tail: 53
		}
	],
	ladders: [
		{
			bottom: 4,
			top: 25
		},
		{
			bottom: 13,
			top: 46
		},
		{
			bottom: 33,
			top: 49
		},
		{
			bottom: 50,
			top: 69
		},
		{
			bottom: 42,
			top: 63
		},
		{
			bottom: 62,
			top: 81
		},
		{
			bottom: 74,
			top: 92
		},
	],
	players: [
		{
			'userId': 'p1'
		},
		{
			'userId': 'p2'
		}
	]
};

module.exports = simulation;