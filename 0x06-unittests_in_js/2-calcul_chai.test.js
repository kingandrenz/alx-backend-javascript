const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
	it('return sum of rounded two decimal integers', () => {
		expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
	});

	it('return difference of 2 rounded decimal integers', () => {
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
	});

	it('return reminder from the dvision of two decimal integers', () => {
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	});
	it('return 0 if arg 3 = 0 while arg 1 is "DIVIDE"', () => {
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
	});

});
