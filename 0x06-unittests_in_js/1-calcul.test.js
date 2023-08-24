const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
	it('return sum of rounded two decimal integers', () => {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
	});

	it('return difference of 2 rounded decimal integers', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});

	it('return reminder from the dvision of two decimal integers', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});
	it('return 0 if arg 3 = 0 while arg 1 is "DIVIDE"', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});

});
