package com.examples.sorting.cci;

public class SortedMerge {

    private static void sortedMerge(int[] a, int[] b, int lastA, int lastB) {
        int lastIndexA = lastA -1;
        int lastIndexB = lastB - 1;
        int lastIndexMerged = lastA + lastB - 1;

        while(lastIndexB >= 0) {
            if(lastIndexA >=0 && a[lastIndexA] > b[lastIndexB]) {
                a[lastIndexMerged--] = a[lastIndexA--];
            } else {
                a[lastIndexMerged--] = b[lastIndexB--];
            }
        }
    }

    public static void main(String[] args) {
        int a[] = new int[13];
        int c[] = {1, 2, 3, 4, 8, 10, 14, 20};
        for(int i=0; i < c.length; i++) {
            a[i] = c[i];
        }

        int b[] = {5, 6, 9, 10, 34};
        int lastA = c.length;
        int lastB = b.length;
        sortedMerge(a, b, lastA, lastB);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
