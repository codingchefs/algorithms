const longestIncreasingSubsequenceParity = (nums) => {
  let max = 1;
  // initialize dp to 1 with a length of nums
  let dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // if nums at i is greater than j, store the max of increment of count at j or max
      if (nums[j] < nums[i]) {
        if ((nums[i] % 2 === 0 && nums[j] % 2 === 1)
          || (nums[i] % 2 === 1 && nums[j] % 2 === 0)) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
          max = Math.max(max, dp[i]);
        }
      }
    }
  }

  return max;
};

const arr = [13, 16, 8, 9, 32, 10];
console.log(longestIncreasingSubsequenceParity(arr));