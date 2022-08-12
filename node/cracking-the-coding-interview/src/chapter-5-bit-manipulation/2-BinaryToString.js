/**
 * Binary to String: Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double,
 * print the binary representation. If the number cannot be represented accurately in binary with at most
 * 32 characters, print "ERROR:'
 * @param num
 * @returns {string}
 *
 * solution:
 * Example: 0.101 => 1 * (1/2) + 0 * (1/2)^2 + 1 * (1/2)^3.
 * multiply num by 2, if result is > 1, then push 1, otherwise 0 into array, till array length is less than 32
 */
const BinaryToString = (num) => {
  // check for num limits
  if (num > 1 || num <= 0) {
    return 'ERROR';
  }
  // initialize binary array
  let binary = ['.'];

  // loop while num > 0
  while (num > 0) {
    if (binary.length >= 32) {
      return 'ERROR';
    }

    // multiply by 2 and check if num > 1
    let r = num * 2;
    if (r >= 1) {
      // add 1 to binary
      binary.push('1');
      // decrease num by 1
      num = r - 1;
    } else {
      // add 0 to binary
      binary.push('0');
      num = r;
    }
  }

  return binary.join('');

};

module.exports = BinaryToString
