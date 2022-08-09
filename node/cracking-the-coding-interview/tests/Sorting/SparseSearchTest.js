const chai = require('chai');

const {expect} = chai;
const SparseSearch = require('../../src/chapter-10-sorting-and-searching/SparseSearch');

describe('Sparse Search', () => {
  describe('Given a list of strings with empty string', () => {
    it('returns the index at which element str occurs', () => {
      const a = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
      const expectedResult = 4;
      const str = "ball";
      const index = SparseSearch(str, a);
      expect(index).to.equal(expectedResult);
    });

    it('returns -1 when element str doesnt occurs', () => {
      const a = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
      const expectedResult = -1;
      const str = "mad";
      const index = SparseSearch(str, a);
      expect(index).to.equal(expectedResult);
    });
  });
});