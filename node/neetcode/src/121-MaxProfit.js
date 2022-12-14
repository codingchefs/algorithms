/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @param prices
 * @constructor
 */
const MaxProfit = (prices) => {
  // initialize left, right, maxProfit
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    // if left is less than right, then calculate profit & move right side byb 1
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right += 1;
  }

  return maxProfit;
};

module.exports = MaxProfit;