const chai = require('chai');

const { expect } = chai;
const searchInRotaryArray = require('../../src/Sorting/SearchInRotaryArray.js');

describe('searchInRotaryArray', () => {
  describe('when a sorted array of integers that has been rotated is passed', () => {
    it('returns middle index if element is found in the middle', () => {
      const rotatedArray = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

      const expectedResult = 5;
      const index = searchInRotaryArray(rotatedArray, 1);
      expect(index).to.deep.equal(expectedResult);
    });
    it('returns correct index if element exists in right side', () => {
      const rotatedArray = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

      const expectedResult = 8;
      const index = searchInRotaryArray(rotatedArray, 5);
      expect(index).to.deep.equal(expectedResult);
    });
    it('returns correct index if element exists in left side', () => {
      const rotatedArray = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

      const expectedResult = 2;
      const index = searchInRotaryArray(rotatedArray, 19);
      expect(index).to.deep.equal(expectedResult);
    });
    it('returns correct index if element exists in left side', () => {
      const rotatedArray = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

      const expectedResult = 2;
      const index = searchInRotaryArray(rotatedArray, 19);
      expect(index).to.deep.equal(expectedResult);
    });

    it('returns correct index if left and middle element are identical', () => {
      const rotatedArray = [2, 2, 2, 3, 4, 2];

      const expectedResult = 3;
      const index = searchInRotaryArray(rotatedArray, 3);
      expect(index).to.deep.equal(expectedResult);
    });
  });
});