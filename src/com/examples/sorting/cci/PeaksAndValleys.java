package com.examples.sorting.cci;

import java.util.Arrays;

public class PeaksAndValleys {

    /*static void sortValleyPeak(int[] a){
        Arrays.sort(a);
        for(int i=1; i<a.length; i+=2) {
            swap(a, i-1, i);
        }
    }*/
    static void swap(int[] a, int left, int right) {
        int temp = a[left];
        a[left] = a[right];
        a[right] = temp;
    }

    static int maxIndex(int[] array, int a, int b, int c){
        int len = array.length;
        int aValue = a >=0 && a < len ? array[a] : Integer.MIN_VALUE;
        int bValue = b >=0 && b < len ? array[b] : Integer.MIN_VALUE;
        int cValue = c >=0 && c < len ? array[c] : Integer.MIN_VALUE;

        int max = Math.max(aValue, Math.max(bValue, cValue));
        if(aValue == max) return a;
        else if (bValue == max) return b;
        else return c;
    }

    static void sortValleyPeak(int[] a) {
        for(int i =1; i< a.length; i+=2) {
            int biggestIndex = maxIndex(a, i-1, i, i+1);
            if(i != biggestIndex) {
                swap(a, i, biggestIndex);
            }
        }
    }

    public static void main(String args[]) {
        int a[] = {7, 4, 8, 9, 0, 1};
        sortValleyPeak(a);
        for(int i =0 ; i <a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
