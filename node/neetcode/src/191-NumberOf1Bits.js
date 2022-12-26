/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming
 * weight).
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given
 * as a signed integer type. It should not affect your implementation, as the integer's internal binary representation
 * is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the
 * input represents the signed integer. -3.
 *
 * Solutions:
 * 1) iterate while right shift of number is not zero, mod by 2 and is result is 1, increment the result
 * 2) A more efficient way to reduce number of loops is to use the trick n & (n-1). and repeat loop till it is all zeros
 */
/**
 * Time complexity O(1)
 * @param {number} n - a positive integer
 * @return {number}
 */
const HammingWeight = (n) => {
  let result = 0;
  // iterate while number right shift not equals zero
  while (n) {
    // mod by 2 and if result is 1, then count in
    result += n % 2;
    n = n >> 1;
  }
  return result;
};

/**
 * This solutions is more efficient with less loops
 * Time complexity O(1)
 * @param n
 * @return {number}
 * @constructor
 */
const HammingWeight_2 = (n) => {
  let result = 0;
  // iterate while number right shift not equals zero
  while (n) {
    n = n & (n - 1);
    result += 1;
  }
  return result;
};

module.exports = {
  HammingWeight,
  HammingWeight_2,
}