/**
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
 * in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data
 * structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new
 * stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks. pop() should behave identically
 * to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
 */
const Stack = require('./Stack')

class SetOfStacks extends Stack {
  stacks;

  constructor(capacity) {
    // initialize stacks and capacity
    super(capacity);
    this.stacks = [];
    this.capacity = capacity;
  }

  push(v) {
    // get last stack.
    const lastStack = this.getLastStack();
    // if exists, and not full add to it
    if (lastStack && !lastStack.isFull()) {
      lastStack.push(v);
    }
    // else create a new stack and add to it
    else {
      const newStack = new Stack(this.capacity);
      newStack.push(v);
      this.stacks.push(newStack);
    }
  }

  pop() {
    // pop element from stack
    const lastStack = this.getLastStack();
    // if last stack is empty, then remove the stack
    if (!lastStack) return 'EmptyStackException';
    const value = lastStack.pop();
    if (lastStack.isEmpty()) {
      this.stacks.pop();
    }
    // return the element popped
    return value;
  }

  getLastStack() {
    if (this.stacks.length === 0) return null;
    return this.stacks[this.stacks.length - 1];
  }

}

module.exports = SetOfStacks;