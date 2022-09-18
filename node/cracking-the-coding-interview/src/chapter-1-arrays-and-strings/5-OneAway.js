/* One Away: There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. Given two strings,
write a function to check if they are one edit (or zero edits) away.
 EXAMPLE:
 pale, ple -> true
 pales, pale -> true
 pale, bale -> true
 pale, bae -> false

 Solution:
 compare lengths are only different by 1.
 Get shorter and longer strings
 * compare each character and ensure that the strings are only different by one.
 if chars are different, strings are same length increment index by 1. if chars are same, increment index by 1
 always increment index 2 by 1
 */

/**
 * both methods combined to one
 * @param first
 * @param second
 * @returns {boolean}
 */
const oneEditAway = (first, second) => {
  // false condition
  if (Math.abs(first.length - second.length) > 1) return false;

  // get shorter and longer string
  let s1 = first.length < second.length ? first : second;
  let s2 = first.length < second.length ? second : first;

  let index1 = 0;
  let index2 = 0;
  let foundDifference = false;

  while (index2 < s2.length && index1 < s1.length) {
    if (s1[index1] !== s2[index2]) {
      // ensure that this is the first difference found
      if (foundDifference) return false;
      foundDifference = true;
      if (s1.length === s2.length) index1++;
    } else {
      index1++; // if matching, move shorter pointer
    }
    index2++; // always move pointer for longer string
  }
  return true;
};

module.exports = oneEditAway;

