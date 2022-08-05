/**
 * Given a sorted array of n integers that has been rotated an unknown number of times, write code
 * to find an element in the array. You may assume that the array was originally sorted in
 * increasing order.
 *
 * Input: find 5 in {15, 16, 19, 20, 25, 1, 3 ,4 ,5 ,7 ,1 0 , 14}
 * Output: 8 (the index of 5 in the array)
 *
 * This code will run in O(log n) if all the elements are unique. However, with many duplicates,
 * the algorithm is actually O(n)
 */
const searchInRotaryArray = (nums, target) => {
  // initialize left, right
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // check if in left half is constant increasing
    if (nums[mid] >= nums[left]) {
      if (target <= nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // else check in right is constant increasing
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

  }

  return -1;
};


module.exports = searchInRotaryArray;
