/**
 * Problem Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Problem Statement:
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase
 * English character. You can perform this operation at most k times. Return the length of the longest substring containing
 * the same letter you can get after performing the above operations.
 *
 * Solution:
 * Use a sliding window technique.
 * move right pointer to the right and check if condition (right -left + 1) - maxFreq <= k, else increment left
 * result will be max of (right - left + 1)
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
  // initialize left, count, result, maxFreq
  let left = 0;
  let count = {};

  let result = 0;
  let maxFreq = 0;

  // loop through s with right
  for (let right = 0; right < s.length; right++) {
    // calculate count of right
    const rightCharacter = s[right];
    count[rightCharacter] = 1 + (count[rightCharacter] || 0);
    // calculate maxFreq
    maxFreq = Math.max(maxFreq, count[rightCharacter]);
    // loop through if (lengthOfSector - maxFreq > k)
    while ((right - left + 1) - maxFreq > k) {
      // count left --
      count[s[left]] -= 1;
      // increment left
      left++;
    }
    // calculate max result
    result = Math.max(result, right - left + 1);
  }
  return result;
};

module.exports = CharacterReplacement;