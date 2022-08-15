const chai = require('chai');
const {expect} = chai;
const Debugger = require('../../src/chapter-5-bit-manipulation/5-Debugger');

describe('Debugger', () => {

  it('Given a number, return true if number is a power of 2', () => {
    const mergedValue = Debugger(0b00001000);
    expect(mergedValue).to.equal(true);
  });

  it('Given a number, return false if number is NOT a power of 2', () => {
    const mergedValue = Debugger(0b1101011000);
    expect(mergedValue).to.equal(false);
  });

});