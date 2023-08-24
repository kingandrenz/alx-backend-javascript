const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it(`should Return the rounden sum of 2 positive integer`, () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it(`should Return  rounded sum of a whole fraction number`, () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it(`should Return rounded sum of two decimal integers`, () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});
	
	it(`should Return rounded sum 0f  2 decimal integers`, () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
	it('should return  rounded sum of a positive and negativ integers', () => {
		assert.strictEqual(calculateNumber(-2.5, 4.8), 3);
	});

	it('should return rounded sum of two negative integers', () => {
		assert.strictEqual(calculateNumber(-5.3, -3.8), -9);
	});

	it('should return rounded sum 0f  positive and 0', () => {
		assert.strictEqual(calculateNumber(6.2, 0), 6);
	});

	it('should return rounded sum of a 0 and 0', () => {
		assert.strictEqual(calculateNumber(0, 0), 0);
	});

});
		
