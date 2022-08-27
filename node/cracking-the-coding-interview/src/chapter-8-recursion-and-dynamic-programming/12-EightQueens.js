/**
 * Eight Queens:Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of
 * them share the same row, column, or diagonal. In this case, "diagonal" means all diagonals, not just the two that
 * bisect the board.
 */
const solveNQueens = (n) => {
  const col = new Set();
  const posDiag = new Set();
  const negDiag = new Set();

  const result = []
  const board = Array(n).fill(0).map(_ => Array(n).fill('.'))

  const backtrack = (r) => {
    if (r === n) {
      result.push(board.map(row => row.join('')))
      return
    }

    for(let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      }

      // if possible, put Queen in
      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r -c );
      board[r][c] = 'Q';

      backtrack(r + 1);

      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r -c );
      board[r][c] = '.';
    }

  }

  backtrack(0);
  return result;
};

module.exports = solveNQueens;