const chai = require('chai');
const {expect} = chai;
const Conversion = require('../../src/chapter-5-bit-manipulation/6-Conversion');

describe('Conversion', () => {

  it('Given two numbers A & B, return number of bits you need to flip to convert A to B', () => {
    const expectedResult = 2;
    const noOfBitsToBeFlipped = Conversion(29, 5);
    expect(noOfBitsToBeFlipped).to.deep.equal(expectedResult);
  });

});