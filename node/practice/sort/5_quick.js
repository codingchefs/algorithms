const assert = require('assert');

/**
 * Time complexity (best & average: O(n log n), worst: O(n^2). Space Complexity: O(log n)
 * quick sorts elements
 *
 * @param array
 * @param left
 * @param right
 * @returns {Array}
 */
const quickSort = (array, left = 0, right = array.length - 1) => {
  // base case as left < right
  if (left < right) {
    // call pivot function on the array
    const pivotIdx = pivotHelper(array, left, right);
    // recursively call the quick sort on array with left and pivotIndex -1
    quickSort(array, left, pivotIdx - 1);
    // recursively call the quick sort on array with pivotIndex + 1 and right
    quickSort(array, pivotIdx + 1, right);
  }
  return array;
};

/**
 * Swap smaller elements to the left and larger elements to the right of pivot
 *
 * @param array
 * @param start
 * @param end
 * @returns {number}
 */
const pivotHelper = (array, start = 0, end = array.length - 1) => {
  // initialize the pivot to start of array
  let pivot = array[start];
  // initialize swap index to be start
  let swapIdx = start;
  // loop through array starting from `start+1` to end
  for (let i = start + 1; i <= end; i++) {
    // if pivot element is greater than current element
    if (pivot > array[i]) {
      // increment swap index
      swapIdx++;
      // swap elements between i and swap index
      swap(array, swapIdx, i);
    }
  }
  // finally swap elements between start and swap index
  swap(array, start, swapIdx);
  return swapIdx;
};
// [4, 8, 2, 1, 5, 7, 6, 3]

/**
 * Swap the elements first index with second index
 *
 * @param array
 * @param firstIdx
 * @param secondIdx
 */
const swap = (array, firstIdx, secondIdx) => {
  const temp = array[firstIdx];
  array[firstIdx] = array[secondIdx];
  array[secondIdx] = temp;
};

/** Tests **/
// Test sorting an empty list.
assert.deepEqual(quickSort([]), []);

// Test sorting a list with one element.
assert.deepEqual(quickSort([3]), [3]);

// Test sorting a list with elements in ascending order.
assert.deepEqual(quickSort([0, 1, 2]), [0, 1, 2]);

// Test sorting a list with elements in descending order.
assert.deepEqual(quickSort([2, 1, 0]), [0, 1, 2]);

// Test sorting a list with duplicate elements.
assert.deepEqual(quickSort([22, 11, 35, 41, 47, 56, 41]), [11, 22, 35, 41, 41, 47, 56]);

// Test sorting a large array.
assert.deepEqual(quickSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);

console.log('All test cases passed!');