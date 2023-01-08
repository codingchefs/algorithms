/**
 * Problem Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Problem Statement:
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * Solution:
 * save the numbers in set. check if number is start of series. If it is, then check right side numbers to see max length.
 *
 * TimeComplexity: O(n)
 * SpaceComplexity: O()
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const LongestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  // loop through nums
  for (const n of nums) {
    // if n doesnt have a left number in the set, which means its starting of series
    if (!numSet.has(n - 1)) {
      let length = 0;
      // 100,4,200,1,3,2
      while (numSet.has(n + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }

  }
  return longest;
};

module.exports = LongestConsecutive;
