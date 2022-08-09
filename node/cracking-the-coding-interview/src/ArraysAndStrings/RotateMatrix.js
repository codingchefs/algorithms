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

const rotateMatrix = (N, matrix) => {
    // check condition
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];

            // top <- left
            matrix[first][i] = matrix[last-offset][first]; // [0,0] -> [3,0]

            // left <- bottom
            matrix[last-offset][first] = matrix[last][last-offset]; // [3, 0] ->[3,3]

            // bottom <- right
            matrix[last][last-offset] = matrix[i][last]; // 0, 3

            // right <- top
            matrix[i][last] = top; //
        }
    }
};

const displayMatrix = (N, mat) => {
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr = [];
        arr.push('[');
        for (let j = 0; j < N; j++) {
            arr.push(mat[i][j]);
            // console.log(" ", mat[i][j]);
        }
        arr.push(']');
        console.log(arr.join(" ") +"\n");
    }
};

let N = 4;

let mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

displayMatrix(N, mat);
rotateMatrix(N, mat);
console.log("====After Rotation====");
displayMatrix(N, mat);
