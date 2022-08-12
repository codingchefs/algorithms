class BitManipulation {
  setBit(x, position) {
    const mask = 1 << position;
    return x | mask;
  }

  clearBit(x, position) {
    const mask = 1 << position;
    return x & ~mask;
  }

  flipBit(x, position) {
    const mask = 1 << position;
    return x ^ mask;
  }

  isBitSet(x, position) {
    const shifted = x >> position;
    return shifted & 1;
  }

  getBit(x, position) {
    const mask = 1 << position;
    return (x & mask) !== 0;
  }

  updateBit(x, position, state) {
    const mask = 1 << position;
    return (x & ~mask) | (-state & mask);
  }
}

module.exports = BitManipulation;