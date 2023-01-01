/**
 * Problem: https://leetcode.com/problems/coin-change/
 * You are given an integer array coins representing coins of different denominations and an integer amount representing
 * a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of
 * money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Solution: ??
 * TimeComplexity: ??
 * SpaceComplexity
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const CoinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  // 1 to 12, coins array
  for (let a = 1; a < amount + 1; a++) {
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }

  return dp[amount] !== (amount + 1) ? dp[amount] : -1;
};

module.exports = CoinChange;