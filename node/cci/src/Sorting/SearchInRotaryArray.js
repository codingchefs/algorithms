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
const searchInRotaryArray = (numbers, left, right, ele) => {
  // if found in middle
  const mid = Math.floor((left + right) / 2);
  if (numbers[mid] === ele) {
    return mid;
  }

  if (left > right) {
    return -1;
  }

  // check to see which half is ordered
  if (numbers[left] < numbers[mid]) { // left is ordered
    // check if ele exists in left half
    if (ele >= numbers[left] && ele < numbers[mid]) {
      return searchInRotaryArray(numbers, left, mid - 1, ele);
    }
    return searchInRotaryArray(numbers, mid + 1, right, ele);
  }

  if (numbers[left] > numbers[mid]) { // right is ordered
    if (ele > numbers[mid] && ele <= numbers[right]) {
      return searchInRotaryArray(numbers, mid + 1, right, ele);
    }
    return searchInRotaryArray(numbers, left, mid - 1, ele);
  }

  if (numbers[left] === numbers[mid]) {
    if (numbers[mid] !== numbers[right]) {
      return searchInRotaryArray(numbers, mid + 1, right, ele); // search right
    }
    const result = searchInRotaryArray(numbers, left, mid - 1, ele); // search left
    if (result === -1) {
      return searchInRotaryArray(numbers, mid + 1, right, ele);
    }
    return result;
  }

  return -1;
};

module.exports = searchInRotaryArray;
