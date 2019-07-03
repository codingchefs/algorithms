package com.examples.sorting;

public class QuickSort {

    private static int partition(int[] a, int start, int end) {
        int pivot = a[end];
        int pIndex = start;
        for(int i=start; i< end; i++) {
            if(a[i] <= pivot) {
                // swap elements a[i], a[pIndex]
                int temp = a[i];
                a[i] = a[pIndex];
                a[pIndex] = temp;
                pIndex++;
            }
        }

        int temp = a[end];
        a[end] = a[pIndex];
        a[pIndex] = temp;
        return pIndex;

    }

    private static void quickSort(int[] a, int start, int end) {
        if(start < end) {
            int pIndex = partition(a, start, end);
            quickSort(a, start, pIndex - 1);
            quickSort(a, pIndex + 1, end);
        }
    }

    public static void main(String[] args) {
        int a[] = { 7, 2, 1, 6, 8, 5, 3, 4 };
        quickSort(a, 0, a.length -1);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }

}
