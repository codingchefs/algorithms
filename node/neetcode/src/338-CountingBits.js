/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of
 * 1's in the binary representation of i.
 * Time complexity: O(nlogn)
 */
/**
 *
 * @param {number} n
 * @return {number[]}
 * @constructor
 */
const CountBits = (n) => {
  const dp = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if(offset * 2 === i) {
      offset = i;
    }

    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};

module.exports = CountBits;