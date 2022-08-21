/**
 * Recursive Multiply: Write a recursive function to multiply two positive integers without using the * operator (or /
 * operator). You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
 */

const minProduct = (a, b) => {
  const bigger = a < b ? b : a;
  let smaller = a < b ? a : b;
  return minProductHelper(smaller, bigger);
};

const minProductHelper = (smaller, bigger) => {
  if (smaller === 0) return 0;
  else if (smaller === 1) return bigger;

  const s = smaller >> 1;
  const halfProd = minProductHelper(s, bigger);

  if (smaller % 2 === 0) {
    return halfProd + halfProd;
  } else {
    return halfProd + halfProd + bigger;
  }
};

module.exports = minProduct;