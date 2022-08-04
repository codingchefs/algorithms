const assert = require('assert');

/**
 * timecomplexity O(n)
 * @param {Array} array
 * @param {number} value
 * @returns {number} - number
 */
const linearSearch = (array, value) => {
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // check if current array ele is equal to the value
        if (array[i] === value) {
            return i;
        }
    }
    // if value not found, return -1
    return -1;
}

assert.equal(linearSearch([10, 15, 20, 25, 30], 15), 1);
assert.equal(linearSearch([10, 15, 20, 25, 30], 15), 1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 5);
assert.equal(linearSearch([100], 100), 0);

assert.equal(linearSearch([1, 2, 3, 4, 5], 6), -1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), -1);
assert.equal(linearSearch([100], 200), -1);

console.log('All test cases passed!');