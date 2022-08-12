/**
 * Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1.
 * Write code to find the length of the longest sequence of 1s you could create.
 *
 * EXAMPLE
 * Input: 1775 (or: 11011101111) Output: 8
 *
 * Solution: check if last bit is 1, then track the length,
 * if last bit is 0, then check if last 2 digits is 0, then reset the length.
 * otherwise preserve previous length and add to currentLength
 *
 */

const flipBit = (a) => {
    if (~a === 0) return 8;

    let currentLength = 0;
    let previousLength = 0;
    let maxLength = 1;
    while (a !== 0) {
        //  if the last bit is 1, the result of x & 1 is 1; otherwise, it is 0
        if ((a & 1) === 1) {
            currentLength++;
            // if the last bit is 0
        } else if ((a & 1) === 0) {
            // last 2 digits is not 0, preserve previousLength
            previousLength = (a & 2) === 0 ? 0 : currentLength;
            currentLength = 0;
        }
        //
        maxLength = Math.max(previousLength + currentLength + 1, maxLength);
        a = a >>> 1;
    }
    return maxLength;
};

const flipBitP1 = (a) => {
    // initiate currentLength, previousLength, maxLength
    let currentLength = 0;
    let previousLength = 0;
    let maxLength = 1;
    // loop while a is not equal to 0
    while (a !== 0) {
        // check if last digit is 1
        if((a & 1) === 1) {
            // increase currentLength
            currentLength++;
            // check if last digit is 0
        } else if((a & 1) === 0){
            // check if last 2 digits is 0, reset previous length to 0 else set currentLength
            previousLength = (a & 2) === 0 ? 0 : currentLength;
            // currentLength 0
            currentLength = 0;
        }

        // set maxLength
        maxLength = Math.max(previousLength + currentLength + 1, maxLength);
        // right shift a
        a = a >>> 1;
    }
    return maxLength;

};

console.log(flipBitP1(0b11011101111));
