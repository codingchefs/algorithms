// Stack - LIFO
const assert = require('assert');

/**
 * Problem Description

 Design a stack that supports push, pop, top, and retrieve the minimum element in constant time.
 push(x) -- Push element x onto stack.
 pop() -- Removes the element on top of the stack.
 top() -- Get the top element.
 getMin() -- Retrieve the minimum element in the stack.

 NOTE:
 All the operations have to be constant time operations.
 getMin() should return -1 if the stack is empty.
 pop() should return nothing if the stack is empty.
 top() should return -1 if the stack is empty.

 Problem Constraints
 1 <= Number of Function calls <= 107

 Input Format
 Functions will be called by the checker code automatically.

 Output Format
 Each function should return the values as defined by the problem statement.

 Example Input
 Input 1:
 push(1)
 push(2)
 push(-2)
 getMin()
 pop()
 getMin()
 top()
 Input 2:
 getMin()
 pop()
 top()

 Example Output
 Output 1:
 -2 1 2
 Output 2:
 -1 -1

 Example Explanation

 Explanation 1:
 Let the initial stack be : []
 1) push(1) : [1]
 2) push(2) : [1, 2]
 3) push(-2) : [1, 2, -2]
 4) getMin() : Returns -2 as the minimum element in the stack is -2.
 5) pop() : Return -2 as -2 is the topmost element in the stack.
 6) getMin() : Returns 1 as the minimum element in stack is 1.
 7) top() : Return 2 as 2 is the topmost element in the stack.

 Explanation 2:
 Let the initial stack be : []
 1) getMin() : Returns -1 as the stack is empty.
 2) pop() :  Returns nothing as the stack is empty.
 3) top() : Returns -1 as the stack is empty.
 *
 * @constructor
 */
function Stack() {
  // Initalize your variables here
  this.items = [];
  this.minStack = [];
}
Stack.prototype.push = function (e) {
  // push element to items
  this.items.push(e);
  // push element to minStack if it is empty or current element is less than existing top element
  if(this.minStack.length === 0 || e < this.minStack[this.minStack.length -1]) {
    this.minStack.push(e);
  }
};
Stack.prototype.pop = function () {
  if(this.items.length === 0) return;
  // if top element in minStack is same as top element in items, pop minStack
  if(this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
  // pop element from items
  return this.items.pop();
};
Stack.prototype.top = function () {
  // return top
  if(this.items.length === 0) return -1;
  return this.items[this.items.length - 1];
};
Stack.prototype.getMin = function () {
  // return minimum
  if (this.minStack.length === 0 ) return -1;
  return this.minStack[this.minStack.length - 1];
};

Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
}

// TESTS SUITE
const st = new Stack();
// 19 P 10 P 9 g P 8 g P 7 g P 6 g p g p g p g p g p g
st.push(10);
st.push(9);
assert.equal(st.getMin(), 9);
st.push(8);
assert.equal(st.getMin(), 8);
st.push(7);
assert.equal(st.getMin(), 7);
st.push(6);
assert.equal(st.getMin(), 6);
st.pop();
assert.equal(st.getMin(), 7);
st.pop();
assert.equal(st.getMin(), 8);
st.pop();
assert.equal(st.getMin(), 9);
st.pop();
assert.equal(st.getMin(), 10);
st.pop();
assert.equal(st.getMin(), -1);

module.exports = Stack;