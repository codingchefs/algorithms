/*
Q) Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and j.
Write a method to insert M into N such that M starts at bit j and ends at bit i.
You can assume that the bits j through i have enough space to fit all of M.
That is, if M= 10011, you can assume that there are at least 5 bits between j and i.
You would not, for example, have j = 3 and i = 2, because M could not fully fit between
bit 3 and bit 2.
EXAMPLE
Input: N = 10000000000, M= 10011, i =2, j = 6
Output: N 10001001100

Solution:
1) build the left mask eg: 11100000
2) build right mask eg: 00000011
3) merge mask
4) clear mValue bits
5) shift nValue
6) merge m_cleared and n_shifted
*/
// N = 1000000000, M = 10011, i = 2, j = 6
const insertion = (nValue, mValue, i, j) => {
    // build the left mask = 1111000000
    const allOnes = ~0;
    const left_mask = allOnes << (j + 1);

    // build right mask = 0000000011
    const right_mask = (1 << i) - 1;

    // merge both to get final mask = 1111000011
    const mask = left_mask | right_mask;

    // clear n for the mask bits = 1000000000
    const n_cleared = nValue & mask;
    // shift m to i = 0001001100
    const m_shifted = mValue << i;

    // merge m_cleared and n_shifted = 1001001100
    return n_cleared | m_shifted;
};

module.exports = insertion;
