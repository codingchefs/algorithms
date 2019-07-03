package com.examples.sorting;

public class MergeSort {

    private static void merge(int[] a, int[] l, int[] r) {
        int left = l.length;
        int right = r.length;
        int i =0, j =0, k =0;

        while(i < left && j < right) {
            if(l[i] < r[j]) {
                a[k++] = l[i++];
            } else {
                a[k++] = r[j++];
            }
        }

        while(i < left) {
            a[k++] = l[i++];
        }

        while(j < right) {
            a[k++] = r[j++];
        }
    }

    private static void mergeSort(int[] a) {
        int n = a.length;
        if(n < 2) return;
        int mid = n/2;
        int[] l = new int[mid];
        int[] r = new int[n - mid];

        for(int i=0; i< mid; i++) {
            l[i] = a[i];
        }

        for(int j=mid; j<n; j++) {
            r[j-mid] = a[j];
        }

        mergeSort(l);
        mergeSort(r);
        merge(a, l, r);
    }

    public static void main(String[] args) {
        int a[] = {2, 7, 4, 1, 6, 3};
        mergeSort(a);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
