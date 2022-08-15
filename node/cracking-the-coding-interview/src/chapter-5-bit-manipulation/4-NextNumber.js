/**
 * Next Number: Given a positive integer, print the next smallest and the next largest number that have the same number
 * of 1 bits in their binary representation.
 * Solution:
 * * nextNumber: compute c0 and c1 (c0 = no.of zeroes, c1= no of 1s). compute p (c1 + c0) - position of right most non
 * trailing zero
 * Flip rightmost non-trailing zero (p),
 * clear bits to the right of p (c0 + c1),
 * Add in c1-1 ones to the right,
 * @param n
 * @returns {number} = least greater number
 * @constructor
 */
const NextNumber = (n) => {
  // compute c0 and c1
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // check if last number is 0 while c > 0
  while ((c & 1) === 0 && (c !== 0)) {
    // increment c0
    c0++;
    // move to next last digit
    c >>= 1;
  }

  while ((c & 1) === 1) {
    // increment c0
    c1++;
    // move to next last digit
    c >>= 1;
  }

  // Error for limits
  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  // position of right most non-trailing zero
  let p = c0 + c1;

  // Flip rightmost non-trailing zero
  n = n | (1 << p)
  //Clear all bits to the right of p
  let a = 1 << p;
  let b = a - 1;
  let mask = ~b;
  n = n & mask;

  // insert c1-1 ones on the right
  a = 1 << (c1 - 1);
  b = a - 1;
  n = n | b;

  return n
};

/**
* prevNumber: compute c0 and c1 (c0 = size of the block of 0s immediately to the left of trailing one, c1= no of 1s).
* compute p (c1 + c0) - position of right most non trailing zero
* Flip rightmost non-trailing one to a zero (p = c1 + c0),
* clear all bits to the right of p (c0 + c1),
* Add in c1 + 1 ones to the right of position p,
**/
const PrevNumber = (n) => {
  // compute c0 and c1
  let temp = n;
  let c0 = 0;
  let c1 = 0;

  while (temp & 1 === 1) {
    // increment c0
    c1++;
    // move to next last digit
    temp >>= 1;
  }

  if(temp === 0) return -1;

  // check if last number is 0 while c > 0
  while ((temp & 1) === 0 && (temp !== 0)) {
    // increment c0
    c0++;
    // move to next last digit
    temp >>= 1;
  }

  // change 1 - position of right most non trailing one
  let p = c0 + c1;

  //Clear all bits to the right of p
  let a = ~0;
  let b = a << (p + 1);
  n = n & b;

  // insert c1 + 1 ones immediately to the right of position p
  a = 1 << (c1 + 1);
  b = a - 1;
  let c = b << (c0 - 1);
  n = n | c;

  return n
};

module.exports = {
  NextNumber,
  PrevNumber,
};