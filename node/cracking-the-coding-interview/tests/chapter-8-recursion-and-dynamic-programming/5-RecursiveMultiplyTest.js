const chai = require('chai');
const {expect} = chai;
const RecursiveMultiply = require('../../src/chapter-8-recursion-and-dynamic-programming/5-RecursiveMultiply');

describe('Recursive Multiply', () => {

  it('Given two positive integers with one of them 0, return 0 as result of multiply', () => {
    const expectedResult = 0;
    const result = RecursiveMultiply(12, 0);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given two positive integers with one of them 1, return other number as result of multiply', () => {
    const expectedResult = 20;
    const result = RecursiveMultiply(1, 20);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given two positive integers with one of them odd, return result of multiply', () => {
    const expectedResult = 60;
    const result = RecursiveMultiply(3, 20);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given two positive integers, return result of multiply', () => {
    const expectedResult = 6000;
    const result = RecursiveMultiply(120, 50);

    expect(result).to.deep.equal(expectedResult);
  });

});