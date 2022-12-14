const chai = require('chai');
const expect = chai.expect;
const MaxProfit = require('../src/121-MaxProfit');

describe("MaxProfit - Best Time to Buy and Sell Stock", () => {

  it("Given nums [7,1,5,3,6,4] return [1,6]", function () {
    const res = MaxProfit([7,1,5,3,6,4]);
    expect(res).to.equal(5);
  });

  it("Given nums [7,6,4,3,1] return [3, 1]", function () {
    const res = MaxProfit([7,6,4,3,1]);
    expect(res).to.equal(0);
  });

});