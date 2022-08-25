/**
 * Coins: Given an infinite number of quarters (25 cents), dimes (1O cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of representing n cents.
 */
const CoinChange = (amount, coins) => {
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i < combinations.length; i++) {
      // if amount >= coin then combinations[amount]+= combinations[amount-coin]
      if (i >= coin) {
        combinations[i] += combinations[i - coin];
      }
    }
  }

  return combinations[amount];
};

module.exports = CoinChange;