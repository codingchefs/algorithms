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
  // sort the nums
  nums.sort((a, b) => a - b);

  // initialize result
  const triplets = [];
  // iterate through nums
  for (let i = 0; i < nums.length - 2; i++) {
    // initialize currentNumber
    const currentNumber = nums[i];

    // check if the currenNumber is same as previous & skip the loop
    if (i > 0 && currentNumber === nums[i - 1]) {
      continue;
    }

    // initialize left and right
    let left = i + 1;
    let right = nums.length - 1;

    // iterate through while left is less than right
    while (left < right) {
      const threeSum = currentNumber + nums[left] + nums[right];
      // if threeSum greater than 0, decrease right
      if (threeSum > 0) {
        right--;
        // if threeSum less than 0, increase left
      } else if (threeSum < 0) {
        left++;
      } else {
        // add to result
        triplets.push([currentNumber, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }

  }

  return triplets;
};

module.exports = threeSum;