const chai = require('chai');

const { expect } = chai;
const SortedSearch = require('../../src/chapter-10-sorting-and-searching/SortedSearch');

describe('Sorted Search', () => {
  describe('Given a list of sorted, positive integers', () => {
    it('returns the index at which element x occurs', () => {
      const a = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99];
      const expectedResult = 12;
      const x = 64;
      const index = SortedSearch(a, x);
      expect(index).to.equal(expectedResult);
    });

    it('returns the index -1 when element x doesnt occurs', () => {
      const a = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99];
      const expectedResult = -1;
      const x = 110;
      const index = SortedSearch(a, x);
      expect(index).to.equal(expectedResult);
    });

    it('returns the index when element x occurs at first index', () => {
      const a = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99, undefined, undefined];
      const expectedResult = 0;
      const x = 5;
      const index = SortedSearch(a, x);
      expect(index).to.equal(expectedResult);
    });

    it('returns the index when element x occurs at last index', () => {
      const a = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99, undefined, undefined];
      const expectedResult = 19;
      const x = 99;
      const index = SortedSearch(a, x);
      expect(index).to.equal(expectedResult);
    });

  });
});
