/**
 * Problem Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Problem Statement:
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * Solution:
 *
 * TimeComplexity: O(n)
 * SpaceComplexity: O(n)
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const TopKFrequent = (nums, k) => {
  // initialize counts
  const counts = new Map();

  // set count of each num
  nums.forEach(num => {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  });

  // create a bucket for each frequency
  const buckets = Array.from({length: nums.length + 1}, () => []);
  // for each bucket, push the key
  for (const [key, value] of counts) {
    buckets[value].push(key);
  }

  // only keep filled buckets and slice last two
  return [].concat(...buckets).slice(-k);
};

module.exports = TopKFrequent;