package com.examples.sorting;

public class SelectionSort {

    private static int[] selectionSort(int[] a, int length) {
        for (int i = 0; i < length - 1; i++) {
            int iMin = i;
            // find smallest element
            for (int j = i + 1; j < length; j++) {
                if (a[j] < a[iMin]) {
                    iMin = j;
                }
            }

            // swap elements
            int temp = a[iMin];
            a[iMin] = a[i];
            a[i] = temp;
        }

        return a;
    }

    public static void main(String[] args) {
        int a[] = {2, 7, 4, 1, 5, 3};
        a = selectionSort(a, 6);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
