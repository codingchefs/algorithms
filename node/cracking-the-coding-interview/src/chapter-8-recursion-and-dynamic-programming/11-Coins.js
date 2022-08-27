/**
 * Coins: Given an infinite number of quarters (25 cents), dimes (1O cents), nickels (5 cents), and pennies (1 cent),
 * write code to calculate the number of ways of representing n cents.
 */
const CoinChange = (amount, coins) => {
  // create empty array of amount + 1 and fill with zeroes
  const combinations = new Array(amount + 1).fill(0);
  // initialize 0th element to 1
  combinations[0] = 1;
  // iterate through coins
  for (const coin of coins) {
    // iterate through amount
    for (let i = 1; i < amount + 1; i++) {
      // if i >= coin, then add the (i-coin)th element
      if (i >= coin) {
        combinations[i] += combinations[i - coin];
      }
    }
  }

  // return the result
  return combinations[amount];

};

// TODO needs fix
const CoinChangeRecursive = (amount, denoms) => {
  const map = new Array(amount + 1).fill(0);
  return makeChangeImpl(amount, denoms, 0, map);
}

const makeChangeImpl = (amount, denoms, index, map) => {
  if (map[amount][index] > 0) {
    return map[amount][index];
  }

  if (index >= denoms.length - 1) return 1;

  let denomAmount = denoms[index];
  let ways = 0;
  for (let i = 0; i * denomAmount <= amount; i++) {
    let amountRemaining = amount - i * denomAmount;
    ways += makeChangeImpl(amountRemaining, denoms, index + 1, map);
  }
  map[amount][index] = ways;
  return ways;
}

module.exports = CoinChange;