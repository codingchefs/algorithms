/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every
 * element is distinct.
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {Array<Number>} nums
 * @return {boolean}
 * @constructor
 */
const ContainsDuplicates = (nums) => {
  // create hashmap
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    // if map contains the value, its a duplicate
    if (map[nums[i]]) {
      return true;
    }
    // else add the value to the map
    map[nums[i]] = true;
  }

  return false;
};

module.exports = ContainsDuplicates;