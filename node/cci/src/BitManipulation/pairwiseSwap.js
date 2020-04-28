/*
Problem: Pairwise Swap: Write a program to swap odd and even bits in an integer with as few instructions as
possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).
solution:
   1) clear odd bits with 0xaaaaaaaa (0 in odd places) (10101010) and shift to right,
   2) clear even bits with 0x55555555 (01010101) and shift to left
   3) merge both
*/

const swapOddEvenBits = (x) => {
    return (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1 ));
};

// 00010111
// even bits: 0 0 0 1
// odd bits: 0 1 1 1

/*
00010111
10101010
---------
00000001

00010111
01010101
--------
00101010
00000001
---------
00101011
 */

// 00101011
console.log(swapOddEvenBits(23));

// output
// 00101011
