/** Conversion:
 * Write a function to determine the number of bits you would need to flip to convert integer A to integer B.
 * EXAMPLE
 * Input: 29 (or: 11101), 15 (or: 01111)
 * Output: 2
 *
 * 11101 <== a
 * 01111 <== b
 * ------
 * 10010 <== c
 * 10001 <== (c -1) &
 * ------
 * 10000 <== c
 * 01111 <== (c -1) &
 * ------
 * 00000
 *
 * SOLUTION: use XOR to get the bits that are different.
 * Start clearing LSB using c & c-1, to check the no. of times
 * it needs to be cleared to get the count.
 **/

const bitSwapRequired = (a, b) => {
  let count = 0;
  for (let c = a ^ b; c !== 0; c = c & (c - 1)) {
    count += 1;
  }
  return count;
};

module.exports = bitSwapRequired;
