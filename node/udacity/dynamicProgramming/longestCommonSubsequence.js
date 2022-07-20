// Find the length of longest string which is a subsequence of both X & Y
// X = B C D B C D A
// Y = A B E C B A B
// result = 4 (B C B A)
// step 1: Design a subproblem in words
// for i where O<= i <= n; x1...xi
// let L(i) = length of LCS in y1...yi
// step 2: Define recurrence
// Express L(i) in terms of L(1),...L(i-1)

const first = ['B', 'C', 'D', 'B', 'C', 'D', 'A'];
const second = ['A', 'B', 'E', 'C', 'B', 'A', 'B'];

function makeArray(w, h, val) {
  var arr = [];
  for(let i = 0; i < h; i++) {
    arr[i] = [];
    for(let j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}

const longestCommonSubsequence = (x, y) => {
  let l;
  const n = x.length;
  l = makeArray(n + 1, n + 1, 0);

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (x[i-1] === y[j-1]) {
        l[i][j] = 1 + l[i-1][j-1];
      } else {
        l[i][j] = Math.max(l[i][j-1], l[i-1][j]);
      }
    }
  }

  return l[n][n];
};

console.log(longestCommonSubsequence(first, second));
