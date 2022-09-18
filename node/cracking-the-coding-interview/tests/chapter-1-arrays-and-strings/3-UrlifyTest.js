const chai = require('chai');
const expect = chai.expect;
const Urlify = require('../../src/chapter-1-arrays-and-strings/3-Urlify');

describe("Arrays and Strings - Urlify", () => {

  it("Given a strings with space and its true length, returns replace all spaces in a string with '%20'", function () {
    const res = Urlify('Mr John Smith    ', 13);
    expect(res).to.equal('Mr%20John%20Smith');
  });

  it("Given a strings with no spaces and its true length, returns replace all spaces in a string with '%20'", function () {
    const res = Urlify('MrJohnSmith', 11);
    expect(res).to.equal('MrJohnSmith');
  });

  it("Given a strings with space and its true length less than actual length, returns replace all spaces in a string with '%20'", function () {
    const res = Urlify('Mr John Smith    ', 10);
    expect(res).to.equal('Mr%20John%20Sm');
  });

});

