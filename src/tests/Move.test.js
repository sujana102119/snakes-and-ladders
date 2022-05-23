const Move = require('../models/Move');
const {snakes} = require('../../config/game');

describe('testing didMissASnake', () => {

  test('did stop 1 step before snake', async () => {    
    const testMove = {
      startPosition: 24,
      dieResult: 2,
      endPosition: 26,
    };
    const move = new Move(testMove.startPosition);
    move.endPosition = testMove.endPosition;
    const didMissSnake = move.didMissASnake(snakes);
    expect(didMissSnake).toEqual(true);
  });

  test('did move 2 steps ahead of snake', async () => {
    const testMove = {
      startPosition: 24,
      dieResult: 5,
      endPosition: 29,
    };
    const move = new Move(testMove.startPosition);
    move.endPosition = testMove.endPosition;
    const didMissSnake = move.didMissASnake(snakes);
    expect(didMissSnake).toEqual(true);
  });

  test('did not miss snake', async () => {
    const testMove = {
      startPosition: 24,
      dieResult: 6,
      endPosition: 30,
    };
    const move = new Move(testMove.startPosition);
    move.endPosition = testMove.endPosition;
    const didMissSnake = move.didMissASnake(snakes);
    expect(didMissSnake).toEqual(false);
  });

  test('did not miss snake', async () => {
    const testMove = {
      startPosition: 22,
      dieResult: 2,
      endPosition: 24,
    };
    const move = new Move(testMove.startPosition);
    move.endPosition = testMove.endPosition;
    const didMissSnake = move.didMissASnake(snakes);
    expect(didMissSnake).toEqual(false);
  });
});