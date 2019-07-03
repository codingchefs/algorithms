package com.examples.sorting.cci;

import java.util.ArrayList;
import java.util.Arrays;

public class GroupAnagrams {

    static String sortChars(String str) {
        char[] c = str.toCharArray();
        Arrays.sort(c);
        return new String(c);
    }

    static void sort(String[] array) {
        // use a hashmap to save the list with {sortedName: ['item1', 'item2']}
        HashMapList<String, String> hashMapList = new HashMapList<String, String>();

        for(int i=0; i< array.length; i++) {
            String sortedString = sortChars(array[i]);
            hashMapList.put(sortedString, array[i]);
        }

        int index =0;
        for(String key: hashMapList.keySet()) {
            ArrayList<String> list = hashMapList.get(key);
            for(String t: list) {
                array[index] = t;
                index++;
            }
        }
    }

    public static void main(String[] args) {
        String[] arr = {"acre", "car", "race", "rare", "rac", "care"};
        sort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
