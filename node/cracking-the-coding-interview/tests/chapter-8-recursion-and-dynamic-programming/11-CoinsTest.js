const chai = require('chai');
const {expect} = chai;
const Coins = require('../../src/chapter-8-recursion-and-dynamic-programming/11-Coins');

describe('Coin Change', () => {

  it('Given n cents, return number of ways of representing it', () => {
    const expectedResult = 13;

    const result = Coins(12, [1, 2, 5]);
    expect(result).to.deep.equal(expectedResult);
  });

});