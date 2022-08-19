const chai = require('chai');
const {expect} = chai;
const TripleStep = require('../../src/chapter-8-recursion-and-dynamic-programming/1-TripleStep');

describe('TripleStep', () => {

  it('Given n steps, return a count of how many possible ways child can run up the stairs', () => {
    const expectedResult = 13;
    const result = TripleStep(5);

    expect(result).to.deep.equal(expectedResult);
  });

});