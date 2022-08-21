const chai = require('chai');
const {expect} = chai;
const PowerSet = require('../../src/chapter-8-recursion-and-dynamic-programming/4-PowerSet');

describe('PowerSet', () => {

  it('Given empty array, return empty array', () => {
    const expectedResult = [[]];
    const result = PowerSet([]);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given array of integers, return subsets containing all possible combinations', () => {
    const expectedResult = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]];
    const result = PowerSet([1, 2, 3]);

    expect(result).to.deep.equal(expectedResult);
  });

});