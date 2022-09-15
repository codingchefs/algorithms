const chai = require('chai');
const {expect} = chai;
const TowersOfHanoi = require('../../src/chapter-8-recursion-and-dynamic-programming/6-TowersOfHanoi');

describe('Towers Of Hanoi', () => {

  it('Given n discs, return destination tower with right discs after movement', () => {
    const expectedResult = {
      "disks": {
        "capacity": 0,
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