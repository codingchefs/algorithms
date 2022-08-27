/**
 * Eight Queens:Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of
 * them share the same row, column, or diagonal. In this case, "diagonal" means all diagonals, not just the two that
 * bisect the board.
 */
const solveNQueens = (n) => {
  // initialize col, diag sets
  const cols = new Set();
  const positiveDiag = new Set();
  const negativeDiag = new Set();

  // initialize result
  const result = [];

  // initialize board
  const board = new Array(n).fill(0).map(_ => Array(n).fill('.'));
  // backtrack
  const backtrack = (r) => {
    // if r == n, capture to result
    if(r === n) {
      result.push(board.map(row => row.join('')));
      return;
    }

    // loop through cols
    for(let c=0; c < n; c++) {
      // condition to check if Q can fit
      if(cols.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r-c)) {
        continue;
      }

      // place queen
      board[r][c] = 'Q';
      cols.add(c);
      positiveDiag.add(r + c);
      negativeDiag.add(r - c);

      backtrack(r + 1);

      // clean up
      board[r][c] = '.';
      cols.delete(c);
      positiveDiag.delete(r + c);
      negativeDiag.delete(r - c);
    }
  };

  backtrack(0);
  return result;
};

module.exports = solveNQueens;