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

const nullifyRow = (matrix, row) =>{
    for(let j =0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
};

const nullifyColumn = (matrix, column) =>{
    for(let i =0; i < matrix[0].length; i++) {
        matrix[i][column] = 0;
    }
};

const setZeros = (matrix) => {
    let hasFirstRowZero = false;
    let hasFirstColZero = false;
    // check if first row has zero
    for(let i =0; i < matrix.length; i++) {
        if(matrix[0][i] === 0) {
            hasFirstRowZero = true;
            break;
        }
    }
    // check if first column has zero
    for(let j =0; j < matrix.length; j++) {
        if(matrix[j][0] === 0) {
            hasFirstColZero = true;
            break;
        }
    }

    // check if rest of rows/columns has zero
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // set all rows and columns zero
    for(let i =1; i <matrix.length; i++) {
        if(matrix[0][i] === 0){
            nullifyColumn(matrix, i);
        }
    }

    for(let j =1; j <matrix.length; j++) {
        if(matrix[j][0] === 0){
            nullifyRow(matrix, j);
        }
    }

    // nullify the first row
    if(hasFirstRowZero){
        nullifyRow(matrix, 0);
    }

    // nullify the first column
    if(hasFirstColZero){
        nullifyColumn(matrix, 0);
    }
};

const displayMatrix = (mat) => {
    let arr = [];
    const N = mat.length;
    for (let i = 0; i < N; i++) {
        arr = [];
        arr.push('[');
        for (let j = 0; j < N; j++) {
            if(mat[i][j] > 9) {
                arr.push(mat[i][j]);
            } else {
                arr.push(' ' + mat[i][j]);
            }

            // console.log(" ", mat[i][j]);
        }
        arr.push(']');
        console.log(arr.join(" ") + "\n");
    }
};

let mat = [
    [1, 2, 3, 4],
    [5, 6, 0, 8],
    [9, 10, 11, 12],
    [13, 0, 15, 16],
];

displayMatrix(mat);
setZeros(mat);
console.log("====After Setting Zeroes====");
displayMatrix(mat);
