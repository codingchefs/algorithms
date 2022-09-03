/**
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 */

const Stack = require('./Stack');

class MyQueue {
  stackNewest;
  stackOldest;

  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  size() {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  add(value) {
    // push onto stackNewest, which always has the newest elements on top
    this.stackNewest.push(value);
  }

  shiftStacks() {
    if(this.stackOldest.isEmpty()) {
      while(!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  peek() {
    // ensure stackOldest has the current elements
    this.shiftStacks();
    return this.stackOldest.peek();
  }

  remove() {
    // ensure stackOldest has the current elements
    this.shiftStacks();
    return this.stackOldest.pop();
  }

}

module.exports = MyQueue;