const chai = require('chai');

const { expect } = chai;
const sortedMerge = require('../../src/Sorting/SortedMerge');

describe('Sorted Merge', () => {
  it('merges two sorted arrays correctly', () => {
    const b = [2, 4, 6, 10];
    const a = [8, 12, 13, 14, 18, ...Array(b.length)];

    const expectedResult = [2, 4, 6, 8, 10, 12, 13, 14, 18];
    const mergedList = sortedMerge(a, b, 5, 4);
    expect(mergedList).to.deep.equal(expectedResult);
  });
});
