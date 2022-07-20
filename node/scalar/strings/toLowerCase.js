/**
 * You are given a function to_lower() which takes a character array A as an argument.

 Convert each character of A into lowercase characters if it exists. If the lowercase of a character does not exist, it remains unmodified.
 The uppercase letters from A to Z are converted to lowercase letters from a to z respectively.

 Return the lowercase version of the given character array.
 */

const toLowerCase = (arr) => {
  // loop through the array.
  for(let i =0; i < arr.length; i++) {
    let charValue = arr[i].charCodeAt(0);
    // check if ascii lies within the range of upper case letters
    if(charValue) {}

    // add 32 to ascii value to convert them to lower case
  }
  return null;
};

console.log(toLowerCase(['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']));