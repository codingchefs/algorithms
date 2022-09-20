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
  let compressedStr = [];
  let consecutiveCount = 0;
  for (let i = 0; i < str.length; i++) {
    consecutiveCount++;
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressedStr.push(str[i]);
      compressedStr.push(consecutiveCount);
      consecutiveCount = 0;
    }
  }
  return compressedStr.length < str.length ? compressedStr.join('') : str;
};

module.exports = compress;
