/**
 * Problem Link: https://leetcode.com/problems/group-anagrams/
 * Problem Statement:
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Solution:
 * create a countArray of ascii values for characters. If the word matches countArray push to array in the map.
 *
 * TimeComplexity: O(m * n * 26) = O(m * n)
 * SpaceComplexity: O(m)
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const GroupAnagrams = (strs) => {
  // initialize result map
  const result = {};

  for (const word of strs) {
    // initialize count array
    const countList = Array(26).fill(0);
    for (const c of word) {
      countList[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const countStr = countList.join("");
    // check the map
    if (!result[countStr]) {
      result[countStr] = [word];
    } else {
      result[countStr].push(word);
    }
  }

  return Object.values(result);
}

module.exports = GroupAnagrams;