/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of
 * 1's in the binary representation of i.
 * Time complexity: O(nlogn)
 * Solution: The solution of the problem is dependent on the
 * 1. pattern of recurring 1s =>  1 + dp(n- offset)
 * 2. offset is doubled if offset is equal to i
 * 0 - 0000 - 0
 * 1 - 0001 - 1 + dp[n - 1]
 * 2 - 0010 - 1 + dp[n - 2]
 * 3 - 0011 - "
 * 4 - 0100 - 1 + dp[n - 4]
 * 5 - 0101 - "
 * 6 - 0110 - "
 * 7 - 0111 - "
 * 8 - 1000 - 1 + dp[n - 8]
 */
/**
 *
 * @param {number} n
 * @return {number[]}
 * @constructor
 */
const CountBits = (n) => {
  // initialize dp & offset
  const dp = Array(n + 1).fill(0);
  let offset = 1;

  // loop through from 1 to n
  for (let i = 1; i < n + 1; i++) {
    // if i is equal to 2 times offset, equal offset to i
    if (i === 2 * offset) {
      offset = i;
    }

    // calculate dp with the formula
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};

module.exports = CountBits;