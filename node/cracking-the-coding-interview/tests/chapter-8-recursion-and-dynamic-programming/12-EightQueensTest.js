const chai = require('chai');
const {expect} = chai;
const EightQueens = require('../../src/chapter-8-recursion-and-dynamic-programming/12-EightQueens');

describe('Four Queens', () => {

  it('Given 4X4 chess board, return all ways of arranging 8 queens', () => {
    const expectedResult = [
      [
        ".Q..",
        "...Q",
        "Q...",
        "..Q.",
      ],
      [
        "..Q.",
        "Q...",
        "...Q",
        ".Q.."
      ]
    ];

    const result = EightQueens(4);
    expect(result).to.deep.equal(expectedResult);
  });

});