/**
 Is Unique: Implement an algorithm to determine if a string has all unique characters.
 What if you cannot use additional data structures?
 Assumption: Character set is ASCII
 Solution: save each character in a map and check if next char exists in map.
 Also check if char length is greater than 128
 time complexity O(N). space complexity O(1).

 */
const isUniqueChars = (str) => {
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
