const MaximumSumPath = (grid) => {
  // Dimensions of grid[][]
  let rows = grid.length;
  let cols = grid[0].length;

  // Stores maximum sum at each cell
  // sum[i][j] from cell sum[0][0]
  let dp = new Array(rows + 1);

  // Loop to create 2D array using 1D array
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
  }

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp.length; j++) {
      dp[i][j] = 0;
    }
  }

  // Iterate to compute the maximum
  // sum path in the grid
  for (let i = 1; i <= rows; i++)
  {
    for (let j = 1; j <= cols; j++)
    {
      // Update the maximum path sum
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
        + grid[i - 1][j - 1];
    }
  }

  // Return the maximum sum
  return dp[rows][cols];
};

const mat = [
  [3, 30, 12],
  [-12, 7, -9],
  [39, -2, 15],
];

console.log(MaximumSumPath(mat));
