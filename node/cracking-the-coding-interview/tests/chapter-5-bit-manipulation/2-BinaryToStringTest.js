const chai = require('chai');
const {expect} = chai;
const BinaryToString = require('../../src/chapter-5-bit-manipulation/2-BinaryToString');

describe('Binary to String', () => {

  it('Given a decimal between 0 and 1, return its binary representation', () => {
    const expectedResult = '.101101';
    const mergedValue = BinaryToString(0.703125);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

  it('Given a decimal between 0 and 1, return error if number cannot be represented accurately', () => {
    const expectedResult = 'ERROR';
    const mergedValue = BinaryToString(0.1);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

  it('Given a negative number, return error', () => {
    const expectedResult = 'ERROR';
    const mergedValue = BinaryToString(0.1);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

  it('Given a number greater than or equal to 1, return error', () => {
    const expectedResult = 'ERROR';
    const mergedValue = BinaryToString(1);
    expect(mergedValue).to.deep.equal(expectedResult);
  });

});