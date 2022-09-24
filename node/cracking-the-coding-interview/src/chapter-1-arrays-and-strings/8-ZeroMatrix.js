/**
 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column
 are set to 0.
 Space Complexity: O(1)

 Solution:
 1. check if the first row and first column have any zeros and set variables rowHasZero & columnHasZero
 (We'll nullify the first row and first column later)
 2. Iterate through the rest of matrix, setting matrix[i][0] & matrix[0][j] to zero, whenever there's a zero
 in matrix[i][j].
 3. Iterate through the rest of matrix, nullifying row i if there;s a zero in  matrix[i][0]
 4. Iterate through the rest of matrix, nullifying row j if there;s a zero in  matrix[0][j]
 5. Nullify the first row and first column if it has zero (step 1)
 */

const nullifyRow = (matrix, row) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};

const nullifyColumn = (matrix, column) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[i][column] = 0;
  }
};

const setZeros = (matrix) => {
  // initialize boolean flags
  let hasFirstRowZero = false;
  let hasFirstColZero = false;

  // check if first row has zero and set flag
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[0][i] === 0) {
      hasFirstRowZero = true;
      break;
    }
  }
  // check if first column has zero and set flag
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][0] === 0) {
      hasFirstColZero = true;
      break;
    }
  }

  // check if rest of values is zero, then set first row and first col index to zero
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // set complete row to zero if first row has zero
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[0][i] === 0) {
      nullifyColumn(matrix, i);
    }
  }

  // set complete column to zero if first column has zero
  for (let j = 1; j < matrix.length; j++) {
    if (matrix[j][0] === 0) {
      nullifyRow(matrix, j);
    }
  }

  // nullify first row
  if (hasFirstRowZero) {
    nullifyRow(matrix, 0);
  }

  // nullify first column
  if (hasFirstColZero) {
    nullifyColumn(matrix, 0);
  }

  return matrix;
};

module.exports = setZeros;
