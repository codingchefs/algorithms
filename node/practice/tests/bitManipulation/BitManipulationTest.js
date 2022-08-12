const chai = require('chai');
const expect = chai.expect;

const BitManipulation = require('../../bitManipulation/BitManipulation');

describe("Bit Manipulation Methods", function() {

  let bm = new BitManipulation();

  it("Returns correct value when a bit is set`", () => {
    const result = bm.setBit(0b00000110, 0b00000101);
    // 00000110 |
    // 00100000
    // ------------
    // 00100110
    expect(result).to.eql(0b00100110);
  });

  it("Returns correct value when a bit is cleared`", () => {
    const result = bm.clearBit(0b00000110, 0b00000010);
    // 00000110 &
    // 00100000 ~
    // 00011111
    // ------------
    // 00000110
    expect(result).to.eql(0b00000010);
  });

  it("Returns correct value when a bit is flipped`", () => {
    const result = bm.flipBit(0b01100110, 0b00000010);
    // 01100110 ^
    // 00000100
    // ------------
    // 01100010
    expect(result).to.eql(0b01100010);
  });

  it("Returns correct value when a bit is modified to 0`", () => {
    const result = bm.updateBit(0b00000110, 0b00000010);
    expect(result).to.eql(0b00000010);
  });

});
