const assert = require('assert');
const insertionSort = (array) => {
    let j = 0;
    // loop through starting from second element in the array
    for (let i = 1; i < array.length; i++) {
        // get the first element as current value
        const currentValue = array[i];
        // loop through starting with `j` as `i-1` back to `0` and check if currentValue is less than jth element
        for (j = i - 1; j >= 0 && currentValue < array[j]; j--) {
            // if condition met move `j` to `j+1` place
            array[j + 1] = array[j];
        }
        // finally insert currentValue at `j+1` place
        array[j + 1] = currentValue;
    }

    return array;
};

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



