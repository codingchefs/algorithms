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
 *
 * TimeComplexity: O(N)
 * SpaceComplexity: O(N)
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const IsValid = (s) => {
  const closeToOpen = { ')': '(', '}' : '{', ']': '[' };
  const stack = [];
  for(c of s) {
    if(closeToOpen[c]) {
      if(stack.length && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return (!stack.length)
};

module.exports = IsValid;