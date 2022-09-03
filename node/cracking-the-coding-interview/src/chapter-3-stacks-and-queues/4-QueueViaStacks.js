/**
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 */

const Stack = require('./Stack');

class MyQueue {
  oldStack;
  newStack;
  constructor() {
    this.oldStack = new Stack();
    this.newStack = new Stack();
  }

  add (value) {
    // add the contents normally to new Stack
    this.newStack.push(value);
  }

  remove() {
    // shift all the content into oldStack and remove from oldStack
    this.shiftStack();
    return this.oldStack.pop();
  }

  peek() {
    this.shiftStack();
    return this.oldStack.peek();
  }

  size() {
    return this.oldStack.size() + this.newStack.size();
  }

  shiftStack() {
    // remove elements from newStack and put in oldStack until newStack is empty
    if(this.oldStack.isEmpty()) {
      while(!this.newStack.isEmpty()) {
        this.oldStack.push(this.newStack.pop())
      }
    }
  }


}

module.exports = MyQueue;