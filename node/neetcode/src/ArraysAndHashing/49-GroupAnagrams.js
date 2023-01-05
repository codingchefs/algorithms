/**
 * Problem Link: https://leetcode.com/problems/group-anagrams/
 * Problem Statement:
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Solution:
 *
 * TimeComplexity: O(m * n * 26) = O(m * n)
 * SpaceComplexity: O(m)
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const GroupAnagrams = (strs) => {
  // Create a map to store the anagrams
  const anagrams = {};

  // Loop through each word
  for (const word of strs) {
    // Create a count map for the word
    const count = Array(26).fill(0);
    for (const c of word) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const countStr = count.join('');
    if (!anagrams[countStr]) {
      anagrams[countStr] = [word];
    } else {
      anagrams[countStr].push(word)
    }
  }

  return Object.values(anagrams);
}

module.exports = GroupAnagrams;