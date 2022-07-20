var MAX = 1000;

// Return the maximum size of substring of
// X which is substring in Y.
const longestSubsequenceSubstring = (x, y) => {
  const n = x.length;
  const m = y.length;
  const dp = Array.from(Array(MAX), ()=> Array(MAX));

  // Initialize the dp[][] to 0.
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  // Calculating value for each element.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // If alphabet of string X and Y are
      // equal make dp[i][j] = 1 + dp[i-1][j-1]
      if (x[j - 1] === y[i - 1])
        dp[i][j] = 1 + dp[i - 1][j - 1];
      // Else copy the previous value in the
      // row i.e dp[i-1][j-1]
      else
        dp[i][j] = dp[i][j - 1];
    }
  }

  // Finding the maximum length.
  let ans = 0;
  for (let i = 1; i <= m; i++)
    ans = Math.max(ans, dp[i][n]);

  return ans;
};

const first = ['a', 'b', 'd', 'b', 'a', 'b', 'f', 'g', 'd'];
const second = ['b', 'e', 't', 'f', 'd', 'b', 'f', 'a', 'f', 'r'];

// const first = ['A', 'B', 'C', 'D'];
// const second = ['B', 'A', 'C', 'D', 'B', 'D', 'C', 'D'];
// b, d, b, a
console.log(longestSubsequenceSubstring(first, second));
