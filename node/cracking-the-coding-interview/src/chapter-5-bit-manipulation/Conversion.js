/** Conversion: Write a function to determine the number of bits you would need to flip to convert integer A to
 * integer B.
 EXAMPLE
 Input: 29 (or: 11101), 15 (or: 01111)
 Output: 2

 SOLUTION: use XOR to get the bits that are different. Start clearing LSB using c & c-1, to check the no. of times
 it needs to be cleared to get the count
 **/

const bitSwapRequired = (a, b) => {
    let count = 0;
    // clears the LCB
    for(let c = a ^ b; c!==0; c = c & (c-1)) {
        count++;
    }
    return count;
};

console.log(bitSwapRequired(29, 15));




/**
11101
01111
------
c1 = 10010
c2= 10110

10110
10101
-----
10100
10011
-----
10000


c3 = 0
10000
01000
------
00000

10010
10001
---


10001
------
10001

 */
