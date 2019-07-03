package com.examples.sorting.cci;

public class SortedMatrixSearch {
    static boolean findElement(int[][] matrix, int elem) {
        int row = 0;
        int col = matrix[0].length -1;

        while(row < matrix.length && col >= 0) {
            if(matrix[row][col] == elem) {
                return true;
            } else if(matrix[row][col] > elem){
                col--;
            } else {
                row++;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[][] matrix = new int[4][4]; //create memory space for entire matrix
        int[] a = {15, 20, 40, 85, 20, 35, 80, 95, 30, 55, 95, 105, 40, 80, 100, 120};
        int row, column, index = 0;
        for (row = 0; row < 4; row++) {
            for (column = 0; column < 4; column++) {
                matrix[row][column] = a[index];
                index++;
            }
        }
        System.out.println(findElement(matrix, 55));
    }
}
