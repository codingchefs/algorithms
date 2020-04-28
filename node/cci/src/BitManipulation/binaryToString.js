/**
 * Binary to String: Given a real number between 8 and 1 (e.g., 0.72) that is passed in as a double,
 * print the binary representation. If the number cannot be represented accurately in binary with at most
 * 32 characters, print "ERROR:'
 * @param num
 * @returns {string}
 *
 * solution:
 * multiply num by 2, if result is > 1, then push 1, otherwise 0 into array, till array length is less than 32
 */
const printBinary = (num) => {
    // check for num limit
    if(num <=0 || num > 1) {
        return "ERROR";
    }
    // initiate binary array
    const binary = [];
    binary.push('.');
    // loop while num > 0
    while(num > 0) {
        // check if array length  > 32
        if(binary.length >=32){
            return "ERROR";
        }
        // r = num * 2
        let r = num * 2;
        // r > 1, then add 1 to array and remove 1 from num
        if(r >= 1) {
            binary.push("1");
            num = r -1;
        } else {
            // else add 0 to array and r = num
            binary.push("0");
            num = r;
        }

    }
    return binary.join('');

};

console.log(printBinary(0.703125));
