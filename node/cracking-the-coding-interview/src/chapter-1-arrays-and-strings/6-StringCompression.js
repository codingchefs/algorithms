/**
 String Compression: Implement a method to perform basic string compression using the
 counts of repeated characters.
 For example, the string aabcccccaaa would become a2blc5a3. If the "compressed"string would not
 become smaller than the original string, your method should return the original string.
 You can assume the string has only uppercase and lowercase letters (a - z).
 SOLUTION:
 use a counter to increment till a different char is found. If current char is different
 than next char then push the char to array and also the consecutiveCount
 */

const compress = (str) => {
  // initialize compressedString
  const compressedString = [];
  let consecutiveCount = 0;
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // increment the counter
    consecutiveCount++;
    // check if last element or if next element is different
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      // append char to compress
      compressedString.push(str[i]);
      // append count to compress
      compressedString.push(consecutiveCount);
      // reset the counter
      consecutiveCount = 0;
    }
  }

  // if compress is less than or equal to str length, return as it is, otherwise return compress string
  return compressedString.length >= str.length ? str : compressedString.join('');
};

module.exports = compress;
