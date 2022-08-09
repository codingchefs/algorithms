/**
 * Sorted Matrix Search: Given an M x N matrix in which each row and each column is sorted in ascending order, write a
 * method to find an element.
 */

const SortedMatrixSearch = (matrix, value) => {
  // null check
  if(matrix.length === 0) return false;

  // initialize rows and columns
  const rows = matrix.length;
  const columns = matrix[0].length;

  // initialize the left and right
  let left = 0;
  let right = rows * columns - 1;

  while(left <= right) {
    let mid = Math.floor((left + right) /2);
    let mid_term = matrix[Math.floor(mid / columns)][mid % columns];

    if(mid_term === value) {
      return true;
    } else if(value < mid_term) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;

};

module.exports = SortedMatrixSearch;