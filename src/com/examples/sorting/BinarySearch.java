package com.examples.sorting;

public class BinarySearch {

    private static int binarySearch(int[] a, int n) {
        int start = 0;
        int end = a.length -1;

        while(start <= end) {
            int mid = (start + end) /2;
            if(a[mid] == n) {
                return mid;
            } else if(a[mid] < n) {
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int a[] = { 1, 2, 3, 4, 5, 6, 8, 10, 14, 20};
        int index = binarySearch(a, 40);
        System.out.println("index: " + index);
    }

}
