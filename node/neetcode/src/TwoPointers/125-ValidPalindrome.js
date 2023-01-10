/**
 * Problem Link: https://leetcode.com/problems/valid-palindrome/
 * Problem Statement:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Solution:
 *
 *
 * TimeComplexity: O()
 * SpaceComplexity: O()
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  // initialize left and right pointers
  let left = 0;
  let right = s.length - 1;

  // loop through till left < right
  while (left < right) {
    // loop through till left < right && left is isAlphanumeric
    while (left < right && !_isAlphanumeric(s[left])) {
      left++;
    }
    // loop through till left < right && right is isAlphanumeric
    while (left < right && !_isAlphanumeric(s[right])) {
      right--;
    }
    // compare left char to right char
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    // increment left and decrement right
    left++;
    right--;
  }

  return true;
};

const _isAlphanumeric = (s) => {
  return (
    "A".charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= "Z".charCodeAt(0) || // 65-90
    "a".charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= "z".charCodeAt(0) || // 97 - 122
    '0'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= '9'.charCodeAt(0) // 48 - 57
  );
};

module.exports = isPalindrome;