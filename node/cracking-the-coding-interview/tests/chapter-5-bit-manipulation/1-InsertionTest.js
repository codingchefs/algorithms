const chai = require('chai');
const {expect} = chai;
const Insertion = require('../../src/chapter-5-bit-manipulation/1-Insertion');

describe('Insertion', () => {

    it('Given two values M and N, return merged value', () => {
        const expectedResult = 0b10001001100;
        const mergedValue = Insertion(0b10000000000, 0b10011, 2, 6);
        expect(mergedValue).to.deep.equal(expectedResult);
    });
});