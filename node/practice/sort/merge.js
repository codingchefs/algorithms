const assert = require('assert');
const mergeSort = array => {
    // base case
    if (array.length <= 1) return array;
    // find mid point
    const mid = Math.floor(array.length / 2);
    // mergeSort left array
    const left = mergeSort(array.slice(0, mid));
    // mergeSort right array
    const right = mergeSort(array.slice(mid));
    // merge left and right
    return merge(left, right);
};

const merge = (sortedArray1, sortedArray2) => {
    // initialize variables for length counter
    let i = 0;
    let j = 0;
    let result = [];

    // loop through both arrays till one of it is exhausted
    while (i < sortedArray1.length && j < sortedArray2.length) {
        if (sortedArray1[i] < sortedArray2[j]) {
            result.push(sortedArray1[i]);
            i++;
        } else {
            result.push(sortedArray2[j]);
            j++;
        }
    }

    // add left over elements to arrays
    while (i < sortedArray1.length) {
        result.push(sortedArray1[i]);
        i++;
    }

    while (j < sortedArray2.length) {
        result.push(sortedArray2[j]);
        j++;
    }

    return result;
};

/** Tests **/
// Test sorting an empty list.
assert.deepEqual(mergeSort([]), []);

// Test sorting a list with one element.
assert.deepEqual(mergeSort([3]), [3]);

// Test sorting a list with elements in ascending order.
assert.deepEqual(mergeSort([0, 1, 2]), [0, 1, 2]);

// Test sorting a list with elements in descending order.
assert.deepEqual(mergeSort([2, 1, 0]), [0, 1, 2]);

// Test sorting a list with duplicate elements.
assert.deepEqual(mergeSort([22, 11, 35, 41, 47, 56, 41]), [11, 22, 35, 41, 41, 47, 56]);

// Test sorting a large array.
assert.deepEqual(mergeSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);

console.log('All test cases passed!');