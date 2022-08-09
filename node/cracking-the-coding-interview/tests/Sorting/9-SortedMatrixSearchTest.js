const chai = require('chai');

const { expect } = chai;
const SortedMatrixSearch = require('../../src/chapter-10-sorting-and-searching/9-SortedMatrixSearch');

describe('Sorted Matrix Search', () => {
  describe('Given a list of sorted matrix', () => {
    it('returns true if x occurs', () => {
      const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
      const expectedResult = true;
      const target = 3;
      const index = SortedMatrixSearch(matrix, target);
      expect(index).to.equal(expectedResult);
    });

    it('returns false if element x doesnt occurs', () => {
      const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
      const expectedResult = false;
      const target = 13;
      const index = SortedMatrixSearch(matrix, target);
      expect(index).to.equal(expectedResult);
    });

  });
});
