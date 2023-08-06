/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * Assumption: Character set is ASCII
 * Hint: scroll down
 * @param str
 * @return {boolean}
 */
const isUniqueChars = (str) => {
  // return false if the string length exceeds the number of unique characters in the alphabet.
  // you can't form a string of 280 unique characters out of a 128-character alphabet.
  if (str.length > 128) return false;

  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (charMap[currentChar]) {
      return false;
    } else {
      charMap[currentChar] = true;
    }
  }

  return true;
};

module.exports = isUniqueChars;











/**
* Solution: save each character in a map and check if next char exists in map.
* Also check if char length is greater than 128 time complexity O(N). space complexity O(1).
*/

