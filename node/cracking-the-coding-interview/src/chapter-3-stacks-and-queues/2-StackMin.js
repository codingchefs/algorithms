/**
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 */

const Stack = require('./Stack');

class StackWithMin extends Stack {
  minStack;

  constructor() {
    super();
    this.minStack = new Stack();
  }

  push(value) {
    // check if value is less than min, push to stack
    if (value <= this.min()) {
      this.minStack.push(value);
    }
    super.push(value);
  }

  pop() {
    // check if popped value is equal to min value, then pop it from minStack
    const value = super.pop();
    if (value === this.min()) {
      this.minStack.pop();
    }

    return value;
  }

  min() {
    // if minStack is empty, return max value, otherwise return peek
    if (this.minStack.isEmpty()) {
      return Number.MAX_VALUE;
    }

    return this.minStack.peek();
  }
}

module.exports = StackWithMin;