const chai = require('chai');
const {expect} = chai;
const Parens = require('../../src/chapter-8-recursion-and-dynamic-programming/9-Parens');

describe('Parens', () => {

  it('Given n integer, return all combinations of well formed parenthesis', () => {
    const expectedResult = [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()'
    ];

    const result = Parens(3);
    expect(result).to.deep.equal(expectedResult);
  });

});