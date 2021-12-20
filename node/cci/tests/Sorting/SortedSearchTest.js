const chai = require('chai');

const { expect } = chai;
const SortedSearch = require('../../src/Sorting/SortedSearch');

describe('Sorted Search', () => {
  describe('Given a list of sorted, positive integers', () => {
    it('returns the index at which element x occurs', () => {
      const a = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99];
      const expectedResult = 12;
      const x = 64;
      const index = SortedSearch(a, x);
      expect(index).to.equal(expectedResult);
    });
  });
});
