const chai = require('chai');
const {expect} = chai;
const PermutationsWithoutDups = require('../../src/chapter-8-recursion-and-dynamic-programming/7-PermutationsWithoutDups');

describe('Permutations Without Dups', () => {

  it('Given a string of unique chars, return all permutations possible', () => {
    const expectedResult = [
      "ABCD",
      "ABDC",
      "ACBD",
      "ACDB",
      "ADCB",
      "ADBC",
      "BACD",
      "BADC",
      "BCAD",
      "BCDA",
      "BDCA",
      "BDAC",
      "CBAD",
      "CBDA",
      "CABD",
      "CADB",
      "CDAB",
      "CDBA",
      "DBCA",
      "DBAC",
      "DCBA",
      "DCAB",
      "DACB",
      "DABC",
    ];

    const result = PermutationsWithoutDups('ABCD');

    expect(result).to.deep.equal(expectedResult);
  });

});