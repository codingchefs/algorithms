/**
 * Problem Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Problem Statement:
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * Solution:
 * Keep a hashmap of counts of each number, for example 1 occurs 3 times
 *  ex: [1,1,1,2,2,3] => {1: 3, 2: 2, 3: 1}
 *  then make an array of arrays of length n + 1. [[],[],[],[],[],[],[]]
 *  then get the index of the array with value from the map: example array[3].push(1)
 *  ex: [[],[3],[2],[1],[],[],[]]
 *  then get the last k records after removing all empty arrays.
 *  ans: [2, 1]
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
  // initialize counts map
  const counts = new Map();

  // loop through and make a map of counts
  nums.forEach(num => {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  });

  // initialize buckets array
  const buckets = Array.from({length: nums.length + 1}, () => []);
  // iterate through the counts and set into the buckets
  for (const [key, value] of counts) {
    buckets[value].push(key);
  }
  // only select last k records
  return [].concat(...buckets).slice(-k);
};

module.exports = TopKFrequent;