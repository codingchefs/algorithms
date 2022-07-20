function MatrixChainOrder(M, n) {
  /* For simplicity of the
  program, one extra row and
  one extra column are allocated in m.  0th row
  and 0th column of m are not used */
  const C = Array(n).fill(0).map(() => Array(n).fill(0));

  var i, j, l, S, q;

  /* m[i, j] = Minimum number of scalar
  multiplications needed to compute the matrix
  A[i]A[i+1]...A[j] = A[i..j] where
  dimension of A[i] is p[i-1] x p[i] */

  // cost is zero when multiplying one matrix.
  for (i = 1; i < n; i++)
    C[i][i] = 0;

  // L is chain length.
  for (S = 2; S <= (n - 1); S++) {
    for (i = 1; i <= n - S; i++) {
      j = i + S - 1;
      if (j === n)
        continue;
      C[i][j] = Number.MAX_VALUE;
      for (l = i; l <= j - 1; l++) {
        // q = cost/scalar multiplications
        q = C[i][l] + C[l + 1][j] + M[i - 1] * M[l] * M[j];
        if (q < C[i][j])
          C[i][j] = q;
      }
    }
  }

  return C[1][n - 1];
}

const arr = [1, 2, 3, 4];
// 3 matrices (1 * 2), (2 * 3) (3 * 4)
const size = arr.length;

console.log('Minimum number of multiplications is ' + MatrixChainOrder(arr, size));