package com.examples.sorting.cci;


import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class MissingInt {

    static long numberOfInts = ((long) Integer.MAX_VALUE) + 1;
    static byte[] bitfield = new byte[(int) (numberOfInts / 8)];
    static String filename = "/Users/sreddy/workspace/Algorithms/src/com/examples/sorting/cci/input.txt";

    static void findOpenNumber() throws FileNotFoundException {
        Scanner in = new Scanner(new FileReader(filename));
        while (in.hasNextInt()) {
            int n = in.nextInt();
            bitfield[n / 8] |= 1 << (n % 8);
        }

        for (int i = 0; i < bitfield.length; i++) {
            for (int j = 0; j < 8; j++) {
                if ((bitfield[i] & (1 << j)) == 0) {
                    System.out.println(i * 8 + j);
                    return;
                }
            }
        }
    }

    public static void main(String[] args) throws FileNotFoundException {
        findOpenNumber();
        //int a[] = { 1, 2, 3, 4, 5, 6, 8, 10, 14, 20};
        //int index = sortedSearch(a, 40);
        //System.out.println("index: " + index);
    }

}
