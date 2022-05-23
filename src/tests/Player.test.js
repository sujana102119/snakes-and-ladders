const {mockTurns, mockPlayer, mockSlides, mockClimbs, mockTurnsForLuckyRolls} = require('./mockData');
const {snakes} = require('../../config/game');
const Player = require('../models/Player');

describe('testing player methods', () => {
  const player = new Player(mockPlayer);
  player.turns = mockTurns;
  test('get slides', async () => {    
    const slides = player.getSlides();
    expect(slides).toEqual(mockSlides);
  });

  test('get climbs', async () => {    
    const climbs = player.getClimbs();
    expect(climbs).toEqual(mockClimbs);
  });
  test('get Biggest Climb In Single Turn', async () => {    
    const biggestClimb = player.getBiggestClimbInSingleTurn();
    expect(biggestClimb).toEqual(28);
  });

  test('get Biggest Slide In Single Turn', async () => {    
    const biggestSlide = player.getBiggestSlideInSingleTurn();
    expect(biggestSlide).toEqual(55);
  });
  
  test('get longest turn', async () => {    
    const longestTurn = player.getLongestTurn();
    expect(longestTurn).toEqual( [ 6, 1 ]);
  });
  
  test('get unluckyRolls', async () => {    
    const unluckyRolls = player.getUnluckyRolls();
    expect(unluckyRolls).toEqual(5);
  });

  test('get luckyRolls', async () => { 
    player.turns = mockTurnsForLuckyRolls();   
    const luckyRolls = player.getLuckyRolls(snakes);
    expect(luckyRolls).toEqual(6);
  });
});