const chai = require('chai');
const expect = chai.expect;
const setZeros = require('../../src/chapter-1-arrays-and-strings/8-ZeroMatrix');

describe("Arrays and Strings - Zero Matrix", () => {
  it("Given a empty matrix, returns empty matrix", () => {
    let mat = [];
    const res = setZeros(mat);
    expect(res).to.deep.equal([]);
  });

  it("Given a matrix, returns matrix with its entire row and column set to 0 if MXN element is 0", () => {

    let mat = [
      [ 1,  2,  3,  4],
      [ 5,  6,  0,  8],
      [ 9, 10, 11, 12],
      [13,  0, 15, 16],
    ];

    let expected = [
      [ 1, 0, 0,  4],
      [ 0, 0, 0,  0],
      [ 9, 0, 0, 12],
      [ 0, 0, 0,  0]
    ];

    const res = setZeros(mat);
    expect(res).to.deep.equal(expected);
  });
});

