/**
 * Problem Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Problem Statement:
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase
 * English character. You can perform this operation at most k times. Return the length of the longest substring containing
 * the same letter you can get after performing the above operations.
 *
 * Solution:
 *
 *
 * TimeComplexity: O()
 * SpaceComplexity: O()
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const CharacterReplacement = (s, k) => {
  let count = {};
  let result = 0;

  let left = 0;
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = 1 + (count[s[right]] || 0);
    maxFreq = Math.max(maxFreq, count[s[right]]);

    while ((right - left + 1) - maxFreq > k) {
      count[s[left]] -= 1;
      left++;
    }

    result = Math.max(result, (right - left + 1));
  }
  return result;
};

module.exports = CharacterReplacement;