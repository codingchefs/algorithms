const chai = require('chai');
const expect = chai.expect;
const oneEditAway = require('../../src/chapter-1-arrays-and-strings/5-OneAway');

describe("Arrays and Strings - One Away", () => {
  it("Given two strings with one char needing insertion to be same, returns true", () => {
    const res = oneEditAway('ple', 'pale');
    expect(res).to.be.true;
  });

  it("Given two strings with one char needing insertion to be same, returns true", () => {
    const res = oneEditAway('pale', 'ple');
    expect(res).to.be.true;
  });

  it("Given two strings with one char needing replacement to be same, returns true", () => {
    const res = oneEditAway('bale', 'pale');
    expect(res).to.be.true;
  });

  it("Given two strings with one char needing deletion to be same, returns true", () => {
    const res = oneEditAway('apple', 'aple');
    expect(res).to.be.true;
  });

  it("Given two strings with more than one char needing edit to be same, returns false", () => {
    const res = oneEditAway('pale', 'bae');
    expect(res).to.be.false;
  });

  it("Given two strings with more than one character difference, returns false", () => {
    const res = oneEditAway('pales', 'bae');
    expect(res).to.be.false;
  });

  it("Given two strings with same char count but more than one character difference, returns false", () => {
    const res = oneEditAway('pale', 'balp');
    expect(res).to.be.false;
  });

});

