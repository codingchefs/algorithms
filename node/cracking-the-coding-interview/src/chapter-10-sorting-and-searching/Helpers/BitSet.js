class BitSet {
  bitSet = [];

  constructor(size) {
    // TODO what does these mean?
    this.bitset = new Array((size >> 5) + 1);
  }

  get(pos) {
    // TODO what does these mean?
    let wordNumber = (pos >> 5);
    // returns the last 5 bits of pos
    let bitNumber = (pos & 0x1F);
    return (this.bitset[wordNumber] & (1 << bitNumber)) !== 0;
  }

  set(pos) {
    let wordNumber = (pos >> 5);
    // returns the last 5 bits of pos
    let bitNumber = (pos & 0x1F);
    // TODO what does these mean?
    this.bitset[wordNumber] |= 1 << bitNumber;
  }
}

module.exports = BitSet;
