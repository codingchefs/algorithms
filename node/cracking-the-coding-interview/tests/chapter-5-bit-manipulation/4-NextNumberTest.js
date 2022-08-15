const chai = require('chai');
const {expect} = chai;
const {NextNumber, PrevNumber} = require('../../src/chapter-5-bit-manipulation/4-NextNumber');

describe('Next Number', () => {

  it('Given a number, return next biggest number with same 1s', () => {
    const expectedResult = 0b11011010001111;
    const mergedValue = NextNumber(0b11011001111100);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

  it('Given a number, return next smallest number with same 1s', () => {
    const expectedResult = 0b10011101110000;
    const mergedValue = PrevNumber(0b10011110000011);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

});