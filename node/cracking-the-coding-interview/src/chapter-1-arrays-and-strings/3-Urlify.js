/**
 * URLify: Write a method to replace all spaces in a string with '%20:
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 * EXAMPLE
 * Input: "Mr John Smith    ", 13
 * Output: "Mr%2eJohn%2eSmith"
 *
 * solution: loop once to get the number of spaces. allocate additional x2 spaces into the array.
 * loop once again to start the ending characters towards the array end. If space is there replace with 0 2 %.
 **/

const urlify = (str1, trueLength) => {
  let spaceCount = 0;
  let str = str1.split('');
  // 1st loop check number of spaces
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === ' ') {
      spaceCount++;
    }
  }
  let index = trueLength + (spaceCount * 2);
  if (trueLength < str.length) str[trueLength] = '\0';
  // move the end of characters towards end
  for (let i = trueLength - 1; i > 0; i--) {
    if (str[i] === ' ') {
      str[index - 1] = '0';
      str[index - 2] = '2';
      str[index - 3] = '%';
      index = index - 3;
    } else {
      // copy the index char to ith char
      str[index - 1] = str[i];
      index--;
    }
  }

  return str.join('');
};

module.exports = urlify;
