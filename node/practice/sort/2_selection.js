const assert = require('assert');
/**
 * Time Complexity O(N^2)
 * selection sort is better than bubble sort
 * selectio sort not that good on nearly sorted arrays compared to bubble and insertion
 * @param {Array} arr
 * @returns {Array} - Sorted Array
 */
const selectionSort = arr => {
    for (let i = 0, n = arr.length; i < n; i++) {
        // loop through and find the min element.
        let minEle = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minEle]) {
                minEle = j;
            }
        }
        // swap the min element with the ith element index
        if (i !== minEle) {
            [arr[i], arr[minEle]] = [arr[minEle], arr[i]];
        }
    }
    return arr;
};

/** Tests **/
// Test sorting an empty list.
assert.deepEqual(selectionSort([]), []);

// Test sorting a list with one element.
assert.deepEqual(selectionSort([3]), [3]);

// Test sorting a list with elements in ascending order.
assert.deepEqual(selectionSort([0, 1, 2]), [0, 1, 2]);

// Test sorting a list with elements in descending order.
assert.deepEqual(selectionSort([2, 1, 0]), [0, 1, 2]);

// Test sorting a list with duplicate elements.
assert.deepEqual(selectionSort([22, 11, 35, 41, 47, 56, 41]), [11, 22, 35, 41, 41, 47, 56]);

// Test sorting a large array.
assert.deepEqual(selectionSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);

console.log('All test cases passed!');