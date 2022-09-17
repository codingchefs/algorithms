const chai = require('chai');
const expect = chai.expect;
const checkPermutation = require('../../src/chapter-1-arrays-and-strings/2-CheckPermutation');

describe("Arrays and Strings - CheckPermutation", () => {

  it("Given two strings with unequal chars, returns false", function () {
    const res = checkPermutation('mississippi', 'ppissssiim');
    expect(res).to.be.false;
  });

  it("Given two empty strings, returns true", function () {
    const res = checkPermutation('', '');
    expect(res).to.be.true;
  });

  it("Given two strings with no permutation, returns false", function () {
    const res = checkPermutation('mississippi', 'ppissisiimi');
    expect(res).to.be.false;
  });

  it("Given two strings with permutation, returns true", function () {
    const res = checkPermutation('mississippi', 'ppissssiimi');
    expect(res).to.be.true;
  });

});

