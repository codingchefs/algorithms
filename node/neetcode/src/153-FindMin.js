/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example,
 * the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 *
 * @param {array<number>} nums
 * @return {number}
 * @constructor
 */
const FindMin = (nums) => {
  // initialize result to be left most number
  let result = nums[0];

  // initialize left and right elements
  let left = 0;
  let right = nums.length - 1;

  // loop through the array
  while (left <= right) {
    // if right is greater than left, take the minimum of left and result
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }

    // initialize mid element
    let mid = Math.floor((left + right) / 2);
    // set result to the minimum of result and mid element
    result = Math.min(result, nums[mid]);

    // if mid element is greater than left, search to right
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      // search to left
      right = mid - 1;
    }
  }

  return result;
};

module.exports = FindMin;