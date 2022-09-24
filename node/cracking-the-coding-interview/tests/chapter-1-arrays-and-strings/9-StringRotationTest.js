const chai = require('chai');
const expect = chai.expect;
const isRotation = require('../../src/chapter-1-arrays-and-strings/9-StringRotation');

describe("Arrays and Strings - String Rotation", () => {
  it("Given two strings of different length, returns false", () => {
    let str1 = 'waterbottle';
    let str2 = 'rbottlewat';
    const res = isRotation(str1, str2);
    expect(res).to.be.false;
  });

  it("Given two strings of which one string is rotation of another, returns true", () => {

    let str1 = 'waterbottle';
    let str2 = 'erbottlewat';
    const res = isRotation(str1, str2);
    expect(res).to.be.true;
  });
});

