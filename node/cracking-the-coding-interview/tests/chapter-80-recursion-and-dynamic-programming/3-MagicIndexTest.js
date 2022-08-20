const chai = require('chai');
const {expect} = chai;
const MagicIndex = require('../../src/chapter-8-recursion-and-dynamic-programming/3-MagicIndex');

describe('MagicIndex', () => {

  it('Given array of duplicate sorted integers, return magic index', () => {
    const expectedResult = 7;
    const result = MagicIndex([-10, -5, 1, 2, 2, 3, 4, 7, 9, 12, 13]);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given array of duplicate sorted integers with no magic index, return -1', () => {
    const expectedResult =  -1;
    const result = MagicIndex([-10, -5, 1, 2, 2, 3, 4, 8, 9, 12, 13]);

    expect(result).to.deep.equal(expectedResult);
  });

});