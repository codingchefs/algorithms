const assert = require('assert');

/**
 * Insertion sort - We are taking an element one at a  time and inserting it in the correct spot
 * works good for nearly sorted data
 *
 * @param array
 * @returns {*}
 */
const insertionSort = (array) => {
    let j = 0;
    for (let i = 1; i < array.length; i++) {
        let currentEle = array[i];

        for (j = i - 1; j >= 0 && array[j] > currentEle; j--) {
            //  move the left element with right one
            array[j + 1] = array [j];
        }

        array[j + 1] = currentEle;
    }
    return array;
};
// [2, 1, 0] => [1, 2, 0]

/** Tests **/
// Test sorting an empty list.
assert.deepEqual(insertionSort([]), []);

// Test sorting a list with one element.
assert.deepEqual(insertionSort([3]), [3]);

// Test sorting a list with elements in ascending order.
assert.deepEqual(insertionSort([0, 1, 2]), [0, 1, 2]);

// Test sorting a list with elements in descending order.
assert.deepEqual(insertionSort([2, 1, 0]), [0, 1, 2]);

// Test sorting a list with duplicate elements.
assert.deepEqual(insertionSort([22, 11, 35, 41, 47, 56, 41]), [11, 22, 35, 41, 41, 47, 56]);

// Test sorting a large array.
assert.deepEqual(insertionSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);

console.log('All test cases passed!');

