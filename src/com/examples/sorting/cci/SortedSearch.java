package com.examples.sorting.cci;

public class SortedSearch {

    static int binarySearch(Listy list, int value, int start, int end) {
        int mid = (start + end) / 2;
        while (start <= end) {
            mid = (start + end) / 2;
            int middle = list.elementAt(mid);
            if (value < middle || middle == -1) {
                end = mid - 1;
            } else if (value > middle) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    static int sortedSearch(Listy list, int value) {
        int index = 1;
        while(list.elementAt(index) != -1 && list.elementAt(index) < value) {
            index *= 2;
        }

        return binarySearch(list, value, index/2, index);
    }

    public static void main(String[] args) {
        //int a[] = { 1, 2, 3, 4, 5, 6, 8, 10, 14, 20};
        //int index = sortedSearch(a, 40);
        //System.out.println("index: " + index);
    }
}
