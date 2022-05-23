const Move = require("../models/Move");

const mockPlayer = {
    userId: 'p1'
};

const mockTurns = [[{
        "startPosition": 0,
        "endPosition": 4,
        "type": "dieRoll",
        "dieResult": 4
    }, {
        "startPosition": 4,
        "endPosition": 25,
        "type": "climb",
        "dieResult": 0
    }],
    {
        "startPosition": 25,
        "endPosition": 28,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 28,
        "endPosition": 31,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 31,
        "endPosition": 36,
        "type": "dieRoll",
        "dieResult": 5
    }, {
        "startPosition": 36,
        "endPosition": 41,
        "type": "dieRoll",
        "dieResult": 5
    }, {
        "startPosition": 41,
        "endPosition": 46,
        "type": "dieRoll",
        "dieResult": 5
    }, [{
        "startPosition": 46,
        "endPosition": 50,
        "type": "dieRoll",
        "dieResult": 4
    }, {
        "startPosition": 50,
        "endPosition": 69,
        "type": "climb",
        "dieResult": 0
    }], {
        "startPosition": 69,
        "endPosition": 71,
        "type": "dieRoll",
        "dieResult": 2
    }, [{
        "startPosition": 71,
        "endPosition": 77,
        "type": "dieRoll",
        "dieResult": 6
    }, {
        "startPosition": 77,
        "endPosition": 78,
        "type": "dieRoll",
        "dieResult": 1
    }], {
        "startPosition": 78,
        "endPosition": 82,
        "type": "dieRoll",
        "dieResult": 4
    }, {
        "startPosition": 82,
        "endPosition": 86,
        "type": "dieRoll",
        "dieResult": 4
    }, {
        "startPosition": 86,
        "endPosition": 88,
        "type": "dieRoll",
        "dieResult": 2
    }, [{
        "startPosition": 88,
        "endPosition": 89,
        "type": "dieRoll",
        "dieResult": 1
    }, {
        "startPosition": 89,
        "endPosition": 53,
        "type": "slide",
        "dieResult": 0
    }], [{
        "startPosition": 53,
        "endPosition": 54,
        "type": "dieRoll",
        "dieResult": 1
    }, {
        "startPosition": 54,
        "endPosition": 31,
        "type": "slide",
        "dieResult": 0
    }], [{
        "startPosition": 31,
        "endPosition": 33,
        "type": "dieRoll",
        "dieResult": 2
    }, {
        "startPosition": 33,
        "endPosition": 49,
        "type": "climb",
        "dieResult": 0
    }], {
        "startPosition": 49,
        "endPosition": 52,
        "type": "dieRoll",
        "dieResult": 3
    }, [{
        "startPosition": 52,
        "endPosition": 54,
        "type": "dieRoll",
        "dieResult": 2
    }, {
        "startPosition": 54,
        "endPosition": 31,
        "type": "slide",
        "dieResult": 0
    }], {
        "startPosition": 31,
        "endPosition": 36,
        "type": "dieRoll",
        "dieResult": 5
    }, [{
        "startPosition": 36,
        "endPosition": 40,
        "type": "dieRoll",
        "dieResult": 4
    }, {
        "startPosition": 40,
        "endPosition": 3,
        "type": "slide",
        "dieResult": 0
    }], [{
        "startPosition": 3,
        "endPosition": 4,
        "type": "dieRoll",
        "dieResult": 1
    }, {
        "startPosition": 4,
        "endPosition": 25,
        "type": "climb",
        "dieResult": 0
    }], {
        "startPosition": 25,
        "endPosition": 26,
        "type": "dieRoll",
        "dieResult": 1
    }, {
        "startPosition": 26,
        "endPosition": 29,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 29,
        "endPosition": 31,
        "type": "dieRoll",
        "dieResult": 2
    }, [{
        "startPosition": 31,
        "endPosition": 37,
        "type": "dieRoll",
        "dieResult": 6
    }, {
        "startPosition": 37,
        "endPosition": 41,
        "type": "dieRoll",
        "dieResult": 4
    }], [{
        "startPosition": 41,
        "endPosition": 47,
        "type": "dieRoll",
        "dieResult": 6
    }, {
        "startPosition": 47,
        "endPosition": 50,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 50,
        "endPosition": 69,
        "type": "climb",
        "dieResult": 0
    }], [{
        "startPosition": 69,
        "endPosition": 74,
        "type": "dieRoll",
        "dieResult": 5
    }, {
        "startPosition": 74,
        "endPosition": 92,
        "type": "climb",
        "dieResult": 0
    }], {
        "startPosition": 92,
        "endPosition": 94,
        "type": "dieRoll",
        "dieResult": 2
    }, {
        "startPosition": 94,
        "endPosition": 96,
        "type": "dieRoll",
        "dieResult": 2
    }, [{
        "startPosition": 96,
        "endPosition": 99,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 99,
        "endPosition": 41,
        "type": "slide",
        "dieResult": 0
    }], [{
        "startPosition": 41,
        "endPosition": 47,
        "type": "dieRoll",
        "dieResult": 6
    }, {
        "startPosition": 47,
        "endPosition": 50,
        "type": "dieRoll",
        "dieResult": 3
    }, {
        "startPosition": 50,
        "endPosition": 69,
        "type": "climb",
        "dieResult": 0
    }], [{
        "startPosition": 69,
        "endPosition": 74,
        "type": "dieRoll",
        "dieResult": 5
    }, {
        "startPosition": 74,
        "endPosition": 92,
        "type": "climb",
        "dieResult": 0
    }], {
        "startPosition": 92,
        "endPosition": 95,
        "type": "dieRoll",
        "dieResult": 3
    }, [{
        "startPosition": 95,
        "endPosition": 95,
        "type": "dieRoll",
        "dieResult": 6
    }, {
        "startPosition": 95,
        "endPosition": 100,
        "type": "dieRoll",
        "dieResult": 5
    }]];


const mockClimbs =  [
    21, 19, 16, 21,
    19, 18, 19, 18
  ];

const mockSlides = [ 36, 23, 23, 37, 58 ];

const mockTurnsForLuckyRolls = function () {
    const move1 = new Move(0, 'dieRoll');
    move1.dieResult = 4;
    move1.endPosition = 4;
    const move2 = new Move(4, 'climb');
    move2.endPosition = 25;
    const move3 = new Move(25, 'dieRoll');
    move3.dieResult = 3;
    move3.endPosition = 28;
    const move4 = new Move(28, 'dieRoll');
    move4.dieResult = 5;
    move4.endPosition = 33;
    const move5 = new Move(33, 'climb');
    move5.endPosition = 49;
    const move6 = new Move(49, 'dieRoll');
    move6.dieResult = 1;
    move6.endPosition = 50;
    const move7 = new Move(50, 'climb');
    move7.endPosition = 69;
    const move8 = new Move(69, 'dieRoll');
    move8.dieResult = 5;
    move8.endPosition = 74;
    const move9 = new Move(74, 'climb');
    move9.endPosition = 92;
    const move10 = new Move(92, 'dieRoll');
    move10.dieResult = 2;
    move10.endPosition = 94;
    const move11 = new Move(94, 'dieRoll');
    move11.dieResult = 6;
    move11.endPosition = 100;
    return [move1, move2, move3, move4, move5, move6, move7, move8, move9, move10, move11];
};

module.exports = {
    mockTurns,
    mockPlayer,
    mockClimbs,
    mockSlides,
    mockTurnsForLuckyRolls
};