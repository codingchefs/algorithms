package com.examples.sorting;

public class BubbleSort {

    private static int[] bubbleSort(int[] a, int length) {
        for(int k =0; k < length -1; k++) {
            int flag = 0;
            for(int i=0; i < length - k -1; i++){
                if(a[i] > a[i+1]) {
                    int temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    flag = 1;
                }
            }
            if(flag == 0) break;
        }

        return a;
    }

    public static void main(String[] args) {
        int a[] = {2, 7, 4, 1, 5, 3};
        a = bubbleSort(a, 6);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
