const chai = require('chai');
const expect = chai.expect;
const rotateMatrix = require('../../src/chapter-1-arrays-and-strings/7-RotateMatrix');

describe("Arrays and Strings - Rotate Matrix", () => {
  it("Given a empty matrix, returns false", () => {
    let mat = [];
    const res = rotateMatrix(mat);
    expect(res).to.be.false;
  });

  it("Given a matrix with unequal rows and cols, returns false", () => {
    let mat = [
      [1, 2, 3],
      [5, 6, 7],
      [9, 10, 11],
      [13, 14, 15],
    ];

    const res = rotateMatrix(mat);
    expect(res).to.be.false;
  });

  it("Given a matrix, returns matrix rotated by 90 degrees", () => {
    let mat = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    let expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];

    const res = rotateMatrix(mat);
    expect(res).to.deep.equal(expected);
  });

});

