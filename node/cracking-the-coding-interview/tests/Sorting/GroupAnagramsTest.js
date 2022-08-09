const chai = require('chai');

const { expect } = chai;
const groupByAnagrams = require('../../src/chapter-10-sorting-and-searching/GroupByAnagrams.js');

describe('Group Anagrams', () => {

  it('group by anagrams when list of words provided', () => {
    const words = ['cat', 'dog', 'tac', 'god', 'act'];

    const expectedResult = ['cat', 'tac', 'act', 'dog', 'god'];
    const groupedWords = groupByAnagrams(words);
    expect(groupedWords).to.deep.equal(expectedResult);
  });
});
