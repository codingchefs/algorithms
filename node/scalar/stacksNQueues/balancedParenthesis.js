const assert = require('assert');
/**
 * Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.
 Refer to the examples for more clarity.
 Problem Constraints
 1 <= |A| <= 100

 Input Format
 The first and the only argument of input contains the string A having the parenthesis sequence.

 Output Format
 Return 0 if the parenthesis sequence is not balanced.
 Return 1 if the parenthesis sequence is balanced.

 Example Input
 Input 1:
 A = {([])}

 Input 2:
 A = (){

Input 3:
 A = ()[]

Example Output
Output 1:
 1

Output 2:
 0

Output 3:
 1
 *
 * @param A
 * @returns {number}
 */
const balancedParenthesis = (A) => {
  // get split array
  const strArray = A.split('');
  let stack = [];
  // loop through elements
  for (let i = 0; i < strArray.length; i++) {
    const currElement = strArray[i];
    // if opening brach push to stack
    if (currElement === '{' || currElement === '(' || currElement === '[') {
      stack.push(currElement);
      // if stack empty, return 0
    } else if (stack.length === 0) {
      return 0;
      // if closing brace, check if stack pop is not opening brace
    } else if (currElement === '}' && stack.pop() !== '{') {
      return 0;
    } else if (currElement === ')' && stack.pop() !== '(') {
      return 0;
    } else if (currElement === ']' && stack.pop() !== '[') {
      return 0;
    }
  }
  // if empty stack return 1, otherwise 0
  return (stack.length === 0) ? 1 : 0;
};

// TESTS SUITE
assert.equal(balancedParenthesis('{([])}'), 1);
assert.equal(balancedParenthesis('(()())'), 1);
assert.equal(balancedParenthesis('(()'), 0);