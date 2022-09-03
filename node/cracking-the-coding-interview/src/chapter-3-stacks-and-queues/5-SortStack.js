/**
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional
 * temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack
 * supports the following operations: push, pop, peek, and isEmpty.
 * solution: Create a tempStack, swap the numbers from currentStack to tempStack if number on tempStack is less than the
 * one on current stack.
 */

const Stack = require('./Stack');
const SortStack = (currentStack) => {
  // create a temp stack
  const tempStack = new Stack();
  // loop through current stack
  while (!currentStack.isEmpty()) {
    // get the first value as temp variable
    const tmp = currentStack.pop();
    // loop through temp array and also check if tmp < temp array top
    while (!tempStack.isEmpty() && tempStack.peek() < tmp) {
      // add to temp stack
      currentStack.push(tempStack.pop());
    }

    // add to temp stack
    tempStack.push(tmp);
  }
  // loop through temp stack and add to current stack
  while (!tempStack.isEmpty()) {
    currentStack.push(tempStack.pop());
  }

};

module.exports = SortStack;