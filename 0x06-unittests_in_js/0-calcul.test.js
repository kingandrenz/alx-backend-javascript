const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('should return the rounden sum of a positive integer', () => {
		assert.strictEqual(calculateNumber(3.7, 8.2), 12);
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
		
