const chai = require('chai');
const {expect} = chai;
const PairwiseSwap = require('../../src/chapter-5-bit-manipulation/7-PairwiseSwap');

describe('Pairwise Swap', () => {

  it('Given a integer, return integer with odd and even bits swapped', () => {
    const expectedResult = 0b00101011;
    const pairwiseSwappedNumber = PairwiseSwap(0b00010111);
    expect(pairwiseSwappedNumber).to.deep.equal(expectedResult);
  });

});