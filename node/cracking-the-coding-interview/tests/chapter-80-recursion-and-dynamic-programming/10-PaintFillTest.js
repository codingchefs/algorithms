const chai = require('chai');
const {expect} = chai;
const PaintFill = require('../../src/chapter-8-recursion-and-dynamic-programming/10-PaintFill');

describe('PaintFill', () => {

  it('Given a screen, a point and color, return the screen with color changes', () => {
    const expectedResult = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1]
    ];

    const result = PaintFill([
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ], 1, 1, 2);
    expect(result).to.deep.equal(expectedResult);
  });

});