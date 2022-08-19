const chai = require('chai');
const {expect} = chai;
const RobotInAGrid = require('../../src/chapter-8-recursion-and-dynamic-programming/2-RobotInAGrid');

describe('Robot in a Grid', () => {

  it('Given a maze with obstacles denoted by 1, return a path from the top left to bottom right', () => {
    const expectedResult = [
      '0x0',
      '1x0',
      '1x1',
      '2x1',
      '2x2',
      '3x2',
      '3x3',
    ];
    const result = RobotInAGrid([
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 0]
    ]);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given a empty maze with obstacles denoted by 1, return null path from the top left to bottom right', () => {
    const expectedResult = null;
    const result = RobotInAGrid([]);

    expect(result).to.deep.equal(expectedResult);
  });

  it('Given a maze with obstacles denoted by 1 and no valid path, return null', () => {
    const expectedResult = null;
    const result = RobotInAGrid([
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 0]
    ]);

    expect(result).to.deep.equal(expectedResult);
  });

});