/**
 * Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1.
 * Write code to find the length of the longest sequence of 1s you could create.
 *
 * EXAMPLE
 * Input: 1775 (or: 11011101111) Output: 8
 *
 * Solution: check if last bit is 1, then track the length,
 * if last bit is 0, then check if last 2 digits is 0, then reset the length.
 * otherwise preserve previous length and add to currentLength
 * example: 11011101111
 */

// 1 0 1
const FlipBitToWin = (a) => {
  // initialize currentLength, PreviousLength
  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1;

  // loop till a doesnt become zero
  while (a !== 0) {
    // check if last digit is 1
    if (a & 1 === 1) {
      // increment current length
      currentLength++;
    } else {
      // check if last two digits is zero, set previousLength = 0, otherwise currentLength
      previousLength = (a & 2 === 0) ? 0 : currentLength;
      // set currentLength to zero
      currentLength = 0; // 0
    }
    // find maxLength
    maxLength = Math.max(currentLength + previousLength + 1, maxLength);
    // right shift a by 1
    a = a >>> 1;
  }
  return maxLength;
};

module.exports = FlipBitToWin;
