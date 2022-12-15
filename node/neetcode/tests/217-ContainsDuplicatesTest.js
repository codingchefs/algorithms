const chai = require('chai');
const expect = chai.expect;
const ContainsDuplicates = require('../src/217-ContainsDuplicates');

describe("ContainsDuplicates", () => {

  it("Given nums [1, 2, 3, 1] returns true", () => {
    const res = ContainsDuplicates([1, 2, 3, 1]);
    expect(res).to.be.true;
  });

  it("Given nums [1,2,3,4] return false", function () {
    const res = ContainsDuplicates([1, 2, 3, 4]);
    expect(res).to.be.false;
  });

  it("Given nums [1,1,1,3,3,4,3,2,4,2] return true", function () {
    const res = ContainsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(res).to.be.true;
  });

});