/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Solution: This is a dynamic problem. We can do bottom up approach. The only way we can come to a step is from previous step
 * or a step before that.As an optimization for space, you can remove array and just use two variables `one` and `two`.
 */
/**
 * @param {number} n
 * @return {number}
 */
const ClimbStairs = (n) => {
  const dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

module.exports = ClimbStairs;