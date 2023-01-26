/**
 * Problem Link: https://leetcode.com/problems/valid-parentheses/
 * Problem Statement:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type
 *
 * Solution:
 * maintain a closeToOpen Map, maintain a stack.
 * iterate through the string,
 * if it is a closing bracket, see if last element in stack is opening bracket and remove it.
 * if it is a opening bracket, then add it to the stack
 * Finally if the stack is empty return true
 * TimeComplexity: O(N)
 * SpaceComplexity: O(N)
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const IsValid = (s) => {
  const closeToOpen = {')': '(', '}': '{', ']': '['};
  const stack = [];

  for (const currentChar of s) {
    // its a closing bracket
    if (closeToOpen[currentChar]) {
      if (stack.length && stack[stack.length - 1] === closeToOpen[currentChar]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currentChar);
    }
  }

  return (!stack.length);
};

module.exports = IsValid;