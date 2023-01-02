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
  // Initialize dp array
  const dp = Array(amount + 1).fill(amount + 1);

  // initialize first element
  dp[0] = 0;
  // loop through each value till amount
  for(let i = 1; i < amount + 1; i++) {
    // loop through each coin value
    for(const coin of coins) {
      if(i - coin >= 0) {
        // calculate dp[i] with Minimum of dp[i] & 1 + dp[i - coin]
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  // return dp[amount] if it is set, otherwise -1
  return dp[amount] !== (amount + 1) ? dp[amount] :  -1;

};

module.exports = CoinChange;