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
  // count the spaces by iterating through full string
  let spaceCount = 0;
  let str = str1.split('');
  for (let i = 0; i < trueLength; i++) {
    const currentChar = str[i];
    if (currentChar === ' ') {
      spaceCount++;
    }
  }

  // calculate full length
  let index = trueLength + (spaceCount * 2);
  if (trueLength < str.length) {
    str = str.splice(0, trueLength);
  }

  // replace spaces with 0 2 % from backwards
  for (let j = trueLength - 1; j > 0; j--) {
    const currentChar = str[j];
    if (currentChar === ' ') {
      // add the chars 0, 2, % and decrement index by 3
      str[index - 1] = '0';
      str[index - 2] = '2';
      str[index - 3] = '%';
      index = index - 3;
    } else {
      // add the currentChar and decrement index by 1
      str[index - 1] = currentChar;
      index--;
    }
  }

  return str.join('');
};

module.exports = urlify;
