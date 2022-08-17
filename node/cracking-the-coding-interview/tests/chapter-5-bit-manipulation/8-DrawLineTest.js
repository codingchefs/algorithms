const chai = require('chai');
const {expect} = chai;
const DrawLine = require('../../src/chapter-5-bit-manipulation/8-DrawLine');

describe('Draw Line', () => {

  it('Given a screen, width, draw a line between (x1,y) to (x2, y)', () => {
    const expectedResult = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      63,
      255,
      255,
      -4,
      undefined,
      undefined,
      undefined,
      undefined
    ];
    const screen = new Array(16);
    const width = 32;

    const result = DrawLine(screen, width, 2,29, 2);

    expect(result).to.deep.equal(expectedResult);
  });

});