package com.examples.sorting.cci;

public class SparseSearch {

    static int search(String[] strings, String str, int first, int last) {
        // check if first and last have vali value
        if(first > last) return -1;
        // calculate mid
        int mid = (last + first)/2;
        // adjust midpoint
        if(strings[mid].isEmpty()) {
            int left = mid -1; // miss
            int right = mid+ 1; //miss
            while(true) {
                if(left < first && right > last){
                  return -1;
                } else if(left >= first && !strings[left].isEmpty()){ // first condition miss
                    mid = left;
                    break;
                } else if(right <= last && !strings[right].isEmpty()){ // first condition miss
                    mid = right;
                    break;
                }
                right++;// miss
                left--; //miss
            }
        }

        // recursively call search
        if(str.equals(strings[mid])) {
            return mid;
        } else if(str.compareTo(strings[mid]) > 0){
            return search(strings, str, mid + 1, last);
        } else {
            return search(strings, str, first, mid - 1);
        }
    }

    static int sparseSearch(String[] strings, String str) {
        // null check
        if(strings == null || str == null || str == "") {
            return -1;
        }
        // call search
        return search(strings, str, 0, strings.length -1);
    }

    public static void main(String[] args) {
        String a[] = { "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""};
        int index = sparseSearch(a, "ball");
        System.out.println("index: " + index);
    }
}
