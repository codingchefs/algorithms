/**
 * Check Permutation: Given two strings, write a method to decide
 * if one is a permutation of the other.
 * assumptions: Its case sensitive, whitespace is significant
 * Solution: Strings of different lengths cannot be permutations of each other. create a hashmap of characters count
 * from first string. iterate through second string and decrement for each matched char. If the char count of any char
 * falls below 0, then return false
 */

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    let currentChar = str1[i];
    if (map[currentChar]) {
      map[currentChar] = map[currentChar] + 1;
    } else {
      map[currentChar] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let currentChar = str2[j];
    map[currentChar] = map[currentChar] - 1;
    if (map[currentChar] < 0) {
      return false;
    }
  }
  return true;
};

module.exports = checkPermutation;
