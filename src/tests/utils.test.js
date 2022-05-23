const { generateRandomNatualNumber, getMinMaxAvg } = require('../lib/utils');

describe('testing utils', () => {
    test('generate Random Natual Number', async () => {    
        const randomNumber = generateRandomNatualNumber(6);
        expect(randomNumber).toBeLessThanOrEqual(6);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
    });

    test('get Min Max Avg', async () => {    
        const result = getMinMaxAvg([10, 5, 47, 23]);
        expect(result.MAX).toEqual(47);
        expect(result.MIN).toEqual(5);
        expect(result.AVERAGE).toEqual(21);
    });
});
