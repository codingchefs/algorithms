const chai = require('chai');
const expect = chai.expect;
const FindMin = require('../src/153-FindMin');

describe("Find Minimum in Rotated Sorted Array", () => {

  it("Given nums [3,4,5,1,2] return 1", function () {
    const res = FindMin([3,4,5,1,2]);
    expect(res).to.equal(1);
  });

  it("Given nums [4,5,6,7,0,1,2] return 0", function () {
    const res = FindMin([4,5,6,7,0,1,2]);
    expect(res).to.equal(0);
  });

  it("Given nums [11,13,15,17] return 11", function () {
    const res = FindMin([11,13,15,17]);
    expect(res).to.equal(11);
  });

});