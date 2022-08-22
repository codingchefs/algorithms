/**
 * Recursive Multiply: Write a recursive function to multiply two positive integers without using the * operator (or /
 * operator). You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
 *
 * Solution: we could count half the squares and then double it (by adding this count to itself). this "doubling" only
 * works if the number is in fact even. When it's not even, we need to do the counting/summing from scratch.
 */

const minProduct = (a, b) => {
  // find smaller number
  const smaller = a < b ? a : b;
  const bigger = a < b ? b : a;
  return minProductHelper(smaller, bigger);
};

const minProductHelper = (smaller, bigger) => {
  // base case for 0 and 1
  if (smaller === 0) return 0;
  else if (smaller === 1) return bigger;
  // get half product by recursively calling by smaller/2
  const s = smaller >> 1;
  const halfProduct = minProductHelper(s, bigger);

  // check if it is even, then add halfProduct twice
  if (smaller % 2 === 0) {
    return halfProduct + halfProduct;
  } else {
    // else add halfProduct twice and also bigger number
    return halfProduct + halfProduct + bigger;
  }
};

module.exports = minProduct;