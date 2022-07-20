const longestIncreasingSubsequence = (nums) => {
  let max = 1;
  // initialize dp to 1 with a length of nums
  let dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // if nums at i is greater than j, store the max of increment of count at j or max
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i]);
      }
    }
  }

  return max;
};

const longestIncreasingSubsequence2 = (a) => {
  const n = a.length;
  const l = [];
  for (let i = 0; i < n; i += 1) {
    l[i] = 1;
    for (let j = 0; j <= i - 1; j += 1) {
      if (a[j] < a[i] && l[i] < 1 + l[j]) {
        l[i] = 1 + l[j];
      }
    }
  }

  let max = 1;
  for (let i = 1; i < n; i += 1) {
    if (l[i] > l[max]) {
      max = i;
    }
  }

  return l[max];
};

const arr = [5, 7, 4, -3, 9, 1, 10, 4, 5, 8, 9, 3];
console.log(longestIncreasingSubsequence2(arr));

module.exports = longestIncreasingSubsequence;
