const chai = require('chai');
const expect = chai.expect;
const TwoSum = require('../src/1-TwoSum');

describe("Two Sum", () => {

  it("Given nums [2,7,11,15] and target 9 return [2,7]", function () {
    const res = TwoSum([2, 7, 11, 15], 9);
    expect(res).to.deep.equal([0, 1]);
  });

  it("Given nums [3, 2, 4] and target 6 return [1, 2]", function () {
    const res = TwoSum([3, 2, 4], 6);
    expect(res).to.deep.equal([1, 2]);
  });

  it("Given nums [3,3] and target 6 return [0,1]", function () {
    const res = TwoSum([3, 3], 6);
    expect(res).to.deep.equal([0, 1]);
  });

});