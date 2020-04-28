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

const insertion = (nValue, mValue, i, j) => {
    // build the left mask left =11100000
    const allOnes = ~0;
    const left = allOnes << (j+1);
    // build the right mask right = 00000011
    const right = ((1 << i) - 1);
    // merge mask
    const mask = left | right;
    // clear mbits
    const m_cleared = nValue & mask;

    // shift nValue
    const n_shifted = mValue << i;
    // merge m_cleared & n_shifted
    return m_cleared | n_shifted;
};

const N = 1201;
const M = 8;
const i = 3;
const j = 6;
const result = insertion(N, M, i, j);
console.log(result, result.toString(2));

// 10,709.59
// 129,286.11
// 55,864.48
