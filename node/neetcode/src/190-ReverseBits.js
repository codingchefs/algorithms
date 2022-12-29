/**
 * Reverse bits of a given 32 bits unsigned integer.
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will
 * be given as a signed integer type. They should not affect your implementation, as the integer's internal binary
 * representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above,
 * the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 *
 * Solution: & 1 with the value and you will get the value at the spot. Keep right shifting n by i so that you get value at each
 * spot. Then or 1 the result and keep  right shifting it to update the result.
 * Time complexity = O(n)
 * Space complexity = O(1)
 *
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const ReverseBits = function (n) { // 0b00000010100101000001111010011100
  let result = 0;
  for (let i = 0; i < 32; i++) {
    const lsb = (n >> i) & 1;
    result = result | (lsb << (31 - i));
  }

  // >>> 0 makes it unsigned even if bit 32 (the sign bit) was set
  return result >>> 0;
};

module.exports = ReverseBits;