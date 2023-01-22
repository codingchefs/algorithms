/**
 * Problem Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Problem Statement:
 *  Given a string s, find the length of the longest substring
 *  without repeating characters.
 * Constraints:
 *  0 <= s.length <= 5 * 104
 *  s consists of English letters, digits, symbols and spaces.
 * Solution:
 * declare a Set, initialize left and right.
 * move the right from 0 to length
 * if charSet has the right element, remove the elements from left till the right element doesnt exist
 * increment left
 * add right element to charSet
 * calculate max of length with right - left + 1
 *
 * TimeComplexity: O(N)
 * SpaceComplexity: O(N)
 */
/**
 * @param {string} s
 * @return {number}
 */
const LengthOfLongestSubstring = (s) => {
  let charSet = new Set();

  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }

    charSet.add(s[right]);
    result = Math.max(result, right - left + 1)
  }
  return result
};

module.exports = LengthOfLongestSubstring;