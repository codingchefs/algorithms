/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range
 * that is missing from the array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Solution: add sum from 0 to len(nums) and subtract sum of nums and return the result. Make it in one loop.
 */

/**
 * @param {number []} nums
 * @return {number}
 */
const MissingNumber = (nums) => {
  let result = nums.length;
  // (3, 0, 1, 2) - (3, 0 , 1)
  for (let i = 0; i < nums.length; i++) {
    result += (i - nums[i]);
  }

  return result;
};

module.exports = MissingNumber;