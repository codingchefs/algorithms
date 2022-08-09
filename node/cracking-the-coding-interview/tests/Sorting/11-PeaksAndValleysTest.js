const chai = require('chai');
const {expect} = chai;
const PeaksAndValleys = require('../../src/chapter-10-sorting-and-searching/11-PeaksAndValleys');

describe('Peaks and Valleys', () => {

  it('Given an unsorted array, return values in peaks and valleys', () => {
    const array = [9, 1, 0, 4, 8, 7];
    const expectedResult = [1, 9, 0, 8, 4, 7];
    const sortedPeakValleys = PeaksAndValleys(array);
    expect(sortedPeakValleys).to.deep.equal(expectedResult);
  });

  it('Given an unsorted array, return values in peaks and valleys 2', () => {
    const array = [5, 3, 1, 2, 3];
    const expectedResult = [3, 5, 1, 3, 2];
    const sortedPeakValleys = PeaksAndValleys(array);
    expect(sortedPeakValleys).to.deep.equal(expectedResult);
  });
});