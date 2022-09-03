/**
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional
 * temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack
 * supports the following operations: push, pop, peek, and isEmpty.
 */

const Stack = require('./Stack');
const SortStack = (currentStack) => {
  const tempStack = new Stack();
  while (!currentStack.isEmpty()) {
    // Insert each element in s in sorted order into r
    const tmp = currentStack.pop();
    while (!tempStack.isEmpty() && tempStack.peek() < tmp) {
      currentStack.push(tempStack.pop());
    }
    tempStack.push(tmp);
  }

  // copy elements from r back into s
  while(!tempStack.isEmpty()) {
    currentStack.push(tempStack.pop());
  }
};

module.exports = SortStack;