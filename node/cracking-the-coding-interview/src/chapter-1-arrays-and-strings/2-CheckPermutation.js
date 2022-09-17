/**
 * Check Permutation: Given two strings, write a method to decide
 * if one is a permutation of the other.
 * assumptions: Its case sensitive, whitespace is significant
 * Solution: Strings of different lengths cannot be permutations of each other. create a hashmap of characters count
 * from first string. iterate through second string and decrement for each matched char. If the char count of any char
 * falls below 0, then return false
 */

const checkPermutation = (str1, str2) => {
  // check if length of strings is not equal
  if (str1.length !== str2.length) return false;
  // build a map of char count for str1
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    const currentChar = str1[i];
    if (map[currentChar]) {
      map[currentChar] += 1;
    } else {
      map[currentChar] = 1;
    }
  }
  // reduce char count for each char found in str2
  for (let j = 0; j < str2.length; j++) {
    const currentChar = str2[j];
    if (map[currentChar] !== 0 && !map[currentChar]) return false;
    map[currentChar] -= 1;
    if (map[currentChar] < 0) return false;
  }
  return true;
};

module.exports = checkPermutation;
