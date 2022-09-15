const chai = require('chai');
const {expect} = chai;
const {Box, createStack} = require('../../src/chapter-8-recursion-and-dynamic-programming/13-StackOfBoxes');

describe('Stack of Boxes', () => {

  it('Given a stack of n boxes, return the max height of stack that can be built', () => {
    const expectedResult = 32;

    const boxes = [
      new Box(1, 7, 4),
      new Box(2, 6, 9),
      new Box(4, 9, 6),
      new Box(10, 12, 8),
      new Box(6, 2, 5),
      new Box(3, 8, 5),
      new Box(5, 7, 7),
      new Box(2, 10, 16),
      new Box(12, 15, 9),
    ];
    const result = createStack(boxes);
    expect(result).to.deep.equal(expectedResult);
  });

});