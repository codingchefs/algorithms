const chai = require('chai');
const {expect} = chai;
const RankNode = require('../../src/chapter-10-sorting-and-searching/10-RankFromStream');

describe('Rank From Stream', () => {

  it('Given an unsorted array, return values in peaks and valleys', () => {
    const rankNode = new RankNode(20);
    rankNode.insert(15);
    rankNode.insert(10);
    rankNode.insert(5);
    rankNode.insert(13);
    rankNode.insert(25);
    rankNode.insert(23);
    rankNode.insert(24);

    const rank = rankNode.getRank(24);
    const expectedResult = 6;
    expect(rank).to.deep.equal(expectedResult);
  });

});