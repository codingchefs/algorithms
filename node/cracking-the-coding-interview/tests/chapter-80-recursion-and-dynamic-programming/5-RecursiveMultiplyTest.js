const chai = require('chai');
const {expect} = chai;
const RecursiveMultiply = require('../../src/chapter-8-recursion-and-dynamic-programming/5-RecursiveMultiply');

describe('Recursive Multiply', () => {

  it('Given two positive integers, return result of multiply', () => {
    const expectedResult = 60;
    const result = RecursiveMultiply(12, 5);

    expect(result).to.deep.equal(expectedResult);
  });

});