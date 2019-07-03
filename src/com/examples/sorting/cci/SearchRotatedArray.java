package com.examples.sorting.cci;

public class SearchRotatedArray {

    static int search(int a[], int left, int right, int x) {
        int mid = (left + right) /2;

        if(x == a[mid]) {
            return mid;
        }

        if(left > right) {
            return -1;
        }

        if(a[left] < a[mid]) { // left is ordered
            if(x >= a[left] && x < a[mid]) {
                // search left
                return search(a, left, mid-1, x);
            } else {
                return search(a, mid+1, right, x);
            }
        } else if(a[mid] < a[left]) { // right is ordered
            if(x > a[mid] && x <= a[right]) {
                return search(a, mid +1, right, x);
            } else {
                return search(a, left, mid-1, x);
            }
        } else if(a[left] == a[mid]) {
            if(a[left] != a[right]) {
                return search(a, mid +1, right, x);
            } else {
                int result = search(a, left, mid -1, x);
                if(result == -1) {
                    return search(a, mid+1, right, x);
                } else {
                    return result;
                }
            }
        }


        return -1;
    }

    public static void main(String[] args) {
        int a[] = {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14};
        int index = search(a, 0, a.length -1, 5);
        System.out.println("x is found at:" + index);

    }
}
