const chai = require('chai');
const expect = chai.expect;
const isPermutationOfPalindrome = require('../../src/chapter-1-arrays-and-strings/4-PalindromePermutation');

describe("Arrays and Strings - Palindrome Permutation", () => {
  it("Given a string, returns true if it is a permutation of a palindrome", function () {
    const res = isPermutationOfPalindrome('tactcoapapa');
    expect(res).to.be.true;
  });

  it("Given a string, returns false if it is NOT a permutation of a palindrome", function () {
    const res = isPermutationOfPalindrome('tactcoaapa');
    expect(res).to.be.false;
  });

});

