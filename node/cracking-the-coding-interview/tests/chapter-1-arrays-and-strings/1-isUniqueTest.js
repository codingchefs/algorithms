const chai = require('chai');
const expect = chai.expect;
const IsUnique = require('../../src/chapter-1-arrays-and-strings/1-IsUnique');

describe("Arrays and Strings - isUnique", () => {

  it("Given a string with unique chars, returns true", function () {
    const res = IsUnique('kevin');
    expect(res).to.be.true;
  });

  it("Given a string with dup chars, returns false", function () {
    const res = IsUnique('mom');
    expect(res).to.be.false;
  });

});

