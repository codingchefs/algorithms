/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 */

/*
|1 | 2|3 |4 |
|5 | 6|7 |8 |
|9 |10|11|12|
|13|14|15|16|

Solution:
   Complexity: O(N^2)
   Iterate over with layer by layer. Store top value. swap out top with left, left with bottom, bottom with right &
   finally right with top saved value.
 */

const rotateMatrix = (matrix) => {
  // matrix null and even check
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  let n = matrix.length;
  // loop through the layers, half the matrix length
  for (let layer = 0; layer < n / 2; layer++) {
    // initialize first and last
    const first = layer;
    const last = n - 1 - layer;
    // loop through the elements in the layer
    for (let i = first; i < last; i++) {
      // initialize offset
      const offset = i - first; // 0, 1, 2, 3; 0, 1,
      // rotate the matrix
      // top = TL
      const top = matrix[first][i]; // [0,0], [1, 1]
      // TL <- BL
      matrix[first][i] = matrix[last - offset][first];
      // BL <- BR
      matrix[last - offset][first] = matrix[last][last - offset];
      // BR <- TR
      matrix[last][last - offset] = matrix[i][last];
      // TR <- TL
      matrix[i][last] = top;
    }
  }
  // return the rotated matrix
  return matrix;

};

module.exports = rotateMatrix;