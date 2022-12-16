const chai = require('chai');
const expect = chai.expect;
const ProductExceptSelf = require('../src/238-ProductExceptSelf');

describe("Product Except Self", () => {

  it("Given nums [1,2,3,4] returns their product except self", () => {
    const res = ProductExceptSelf([1, 2, 3, 4]);
    expect(res).to.deep.equal([24,12,8,6]);
  });

  it("Given nums [-1,1, 0, -3,3] returns their product except self", function () {
    const res = ProductExceptSelf([-1,1,0,-3,3]);
    expect(res).to.deep.equal([0,0,9,0,0]);
  });

});