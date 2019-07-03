package com.examples.sorting;

public class InsertionSort {

    private static int[] insertionSort(int[] a, int length) {
        for (int i = 0; i < length; i++) {
            int value = a[i];
            int hole = i;
            while (hole > 0 && a[hole - 1] > value) {
                // swap value of hole with greater value
                a[hole] = a[--hole];
            }

            a[hole] = value;
        }

        return a;
    }

    public static void main(String[] args) {
        int a[] = {2, 7, 4, 1, 5, 3};
        a = insertionSort(a, 6);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
