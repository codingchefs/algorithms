/**
 * Given two binary strings, return their sum (also a binary string).
 *
 * Example:
 * a = "100"
 * b = "11"
 * Return a + b = "111".
 */

const addBinary = (A, B) => {
  let i = A.length -1 ;
  let j = B.length - 1;

  let carry = 0;
  let sumArray = [];
  while(i >= 0 || j >= 0) {
    const a_val = +A[i--] || 0;
    const b_val = +B[j--] || 0;
    let localSum = a_val + b_val + carry;
    sumArray.push(localSum % 2);
    carry = Math.floor(localSum / 2)
  }

  if (carry === 1) {
    sumArray.push(carry);
  }
  return sumArray.reverse().join('');
};

const a = "1101";
const b = "100";
// 1101
// 0100
// ----
// 10001

console.log(addBinary(a, b))