const assert = require('assert');
const selectionSort = array => {
    // loop through all the elements
    for (let i = 0, n = array.length; i < n; i++) {
        // store first element as smallest element
        let lowest = i;
        // loop through t

        for (let j = i + 1; j < n; j++) {
            // compare the lowest to the current element and update if you find lower element than lowest
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }
        // swap i with lowest element
        swap(array, i, lowest);
    }

    return array;

};

const swap = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
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