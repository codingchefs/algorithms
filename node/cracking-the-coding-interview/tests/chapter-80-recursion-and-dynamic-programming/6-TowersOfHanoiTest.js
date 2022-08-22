const chai = require('chai');
const {expect} = chai;
const TowersOfHanoi = require('../../src/chapter-8-recursion-and-dynamic-programming/6-TowersOfHanoi');

describe('Towers Of Hanoi', () => {

  it('Given two positive integers with one of them 0, return 0 as result of multiply', () => {
    const expectedResult = {
      "disks": {
        "items": [
          2,
          1,
          0,
        ]
      },
      "index": 2,
      "name": "destination"
    };

    const result = TowersOfHanoi(3);

    expect(result).to.deep.equal(expectedResult);
  });

});