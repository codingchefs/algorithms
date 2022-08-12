const chai = require('chai');
const {expect} = chai;
const FlipBitToWin = require('../../src/chapter-5-bit-manipulation/3-FlipBitToWin');

describe('Flip Bit To Win', () => {

  it('Given two values M and N, return merged value', () => {
    const expectedResult = 8;
    const mergedValue = FlipBitToWin(0b11011101111);
    expect(mergedValue).to.deep.equal(expectedResult);
  });
});