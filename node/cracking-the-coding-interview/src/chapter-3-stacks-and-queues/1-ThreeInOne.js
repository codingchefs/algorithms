/**
 * Three in One: Describe how you could use a single array to implement three stacks.
 * Solution: We can divide the array in three equal parts and allow the individual stack to grow in that limited space.
 * Note: We will use the notation "[" to mean inclusive of an end point and "(" to mean exclusive of an end point.
 * For stack 1, we will use [0, n/3).
 * For stack 2, we will use [n/3, 2n/3).
 * For stack 3,we will use [2n/3, n).
 */

class FixedMultiStack {
  numberOfStacks = 3;
  stackCapacity;
  values;
  sizes;

  constructor(stackSize) {
    this.stackCapacity = stackSize;
    this.values = new Array(stackSize * this.numberOfStacks);
    this.sizes = new Array(this.numberOfStacks).fill(0);
  }

  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      return 'FullStackException';
    }
    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      return 'EmptyStackException';
    }

    const topIndex = this.indexOfTop(stackNum);
    const value = this.values[topIndex];
    this.values[topIndex] = 0;
    this.sizes[stackNum]--;
    return value;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) return 'EmptyStackException';
    return this.values[this.indexOfTop(stackNum)];
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  size(stackNum) {
    return this.sizes[stackNum];
  }

  indexOfTop(stackNum) {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

module.exports = FixedMultiStack;