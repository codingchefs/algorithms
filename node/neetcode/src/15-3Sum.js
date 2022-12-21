/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * Time complexity: O(n^2)
 * Space complexity: O(1) or O(n) based on sorting implementation
 */

/**
 * @param{array<number>} nums - an array of integers
 * @return {number[][]}
 */
const threeSum = (nums) => {
  // initialize result
  const result = [];
  // sort numbers
  nums.sort();

  // iterate through numbers
  for (let i = 0; i < nums.length; i++) {
    // initialize a
    const currentNumber = nums[i];
    // if repeated value found, then skip the loop
    if (i > 0 && currentNumber === nums[i - 1]) {
      continue;
    }

    // initialize left and right
    let left = i + 1;
    let right = nums.length - 1;
    // -2, -2, 0, 0, 2, 2
    let threeSum;
    // iterate till left < right
    while (left < right) {
      // calculate threeSum
      threeSum = currentNumber + nums[left] + nums[right];
      // if threeSum greater than 0, decrease right
      if (threeSum > 0) {
        right -= 1;
      // if threeSum less than 0, increase left
      } else if (threeSum < 0) {
        left += 1;
      } else {
      // add result
        result.push([currentNumber, nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return result;
};

module.exports = threeSum;