const chai = require('chai');
const expect = chai.expect;
const compress = require('../../src/chapter-1-arrays-and-strings/6-StringCompression');

describe("Arrays and Strings - String Compression", () => {
  it("Given a empty string, returns empty string", function () {
    const res = compress('');
    expect(res).to.equal('');
  });

  it("Given a string, returns counts of repeated characters", function () {
    const res = compress('aabcccccaaa');
    expect(res).to.equal('a2b1c5a3');
  });

  it("Given a string with no repeating characters, returns string as it is", function () {
    const res = compress('abcdefg');
    expect(res).to.equal('abcdefg');
  });
});

