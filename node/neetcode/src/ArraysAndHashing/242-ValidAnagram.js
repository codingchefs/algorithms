/**
 * Problem Link: https://leetcode.com/problems/valid-anagram/
 * Problem Statement:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all
 * the original letters exactly once.
 *
 * Solution:
 *  sort the array and compare to see if the strings are equal
 * TimeComplexity: O()
 * SpaceComplexity: O()
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const ValidateAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  if (s && t && s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  }
  return false;
};

module.exports = ValidateAnagram;