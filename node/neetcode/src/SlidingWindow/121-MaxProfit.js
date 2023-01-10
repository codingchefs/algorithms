/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param prices
 * @constructor
 */
const MaxProfit = (prices) => {
  // initialize variables
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  // loop till right pointer is less than prices list
  while (right < prices.length) {
    // check if price at right is greater than price at left
    if (prices[right] > prices[left]) {
      // calculate profit
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