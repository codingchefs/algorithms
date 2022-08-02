const assert = require('assert');

/**
 * radix sorts elements
 *
 * @param array
 * @returns {Array}
 */
const radixSort = (array) => {
    // get digits of largest number
    const largestNumDigits = mostDigits(array);

    // loop through k =0 to mostDigits
    for (let k = 0; k < largestNumDigits; k++) {
        // initialize buckets with length 10 and empty array
        let bucketDigits = Array.from({length: 10}, () => []);
        // iterate through array elements and place them in correct buckets
        for (let i = 0; i < array.length; i++) {
            const digitAtK = getDigit(array[i], k);
            bucketDigits[digitAtK].push(array[i]);
        }
        // concat elements in the same order in buckets
        array = [].concat(...bucketDigits);
    }
    return array;
};

/**
 * Gets digit at ith place. example: (12345, 3) => 2.
 *
 * @param num
 * @param i
 * @returns {number} - digit at ith place
 */
const getDigit = (num, i) => {
    // divide by 10 ^i to get rid of numbers to the right of ith digit
    // and then get the remainder by 10
    return (Math.floor(Math.abs(num) / Math.pow(10, i)) % 10);
};

/**
 * Gets the number of digits in num
 *
 * @param num
 * @returns {number} - number of digits
 */
const digitCount = num => {
    // log 0 is -Infinity
    if (num === 0) return 1;
    // 10^n = num => find n => n = log10num
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/**
 * Gets the max Digit count
 *
 * @param {Array} nums - ex: [23, 456, 89744, 2334]
 * @returns {number} - number of maxDigit in the array
 */
const mostDigits = nums => {
    let maxDigit = 0;

    for (let i = 0, n = nums.length; i < n; i++) {
        maxDigit = Math.max(maxDigit, digitCount(nums[i]));
    }
    return maxDigit;
};

/** Tests **/
// testing getDigit
assert.deepEqual(getDigit(12345, 0), 5);
assert.deepEqual(getDigit(12345, 3), 2);
assert.deepEqual(getDigit(12345, 5), 0);

// testing digitCount
assert.deepEqual(digitCount(1234), 4);
assert.deepEqual(digitCount(0), 1);

// testing mostDigits
assert.deepEqual(mostDigits([23, 456, 89744, 2334]), 5);
assert.deepEqual(mostDigits([]), 0);

// Test sorting an empty list.
assert.deepEqual(radixSort([]), []);

// Test sorting a list with one element.
assert.deepEqual(radixSort([3]), [3]);

// Test sorting a list with elements in ascending order.
assert.deepEqual(radixSort([0, 1, 2]), [0, 1, 2]);

// Test sorting a list with elements in descending order.
assert.deepEqual(radixSort([2, 1, 0]), [0, 1, 2]);

// Test sorting a list with duplicate elements.
assert.deepEqual(radixSort([22, 11, 35, 41, 47, 56, 41]), [11, 22, 35, 41, 41, 47, 56]);

// Test sorting a large array.
assert.deepEqual(radixSort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90]);

console.log('All test cases passed!');
