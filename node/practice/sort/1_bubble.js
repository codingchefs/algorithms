const assert = require('assert');
/**
 * compare two consecutive values and if later element is less than current element,
 * swap the elements
 * Time Complexity O(N^2)
 * Best Case O(N)
 *
 * @param {Array} arr
 * @returns {Array} - sorted array
 */
const bubbleSortModified = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < (i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
};

const arrayToSort = [22, 11, 35, 41, 47, 56, 41];
const sortedArray = bubbleSortModified(arrayToSort);
assert.deepEqual(sortedArray, [11, 22, 35, 41, 41, 47, 56]);
console.log('==== ALL TESTS PASSED! ===');



