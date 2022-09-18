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
  // check lengths to be no more than 1
  if (Math.abs(first.length - second.length) > 1) return false;

  // get shorter and longer strings
  const shorter = first.length > second.length ? second : first;
  const longer = first.length > second.length ? first : second;

  let shortIndex = 0;
  let longIndex = 0;
  let foundDifference = false;

  // loop through while comparing each character
  while (shortIndex < shorter.length && longIndex < longer.length) {
    // if chars are different, then mark the difference
    if (shorter[shortIndex] !== longer[longIndex]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
      // if strings same length, increment short index
      if (shorter.length === longer.length) shortIndex++;
    } else {
      // else increment short index
      shortIndex++;
    }
    // always increment long index
    longIndex++;
  }

  return true;
};

module.exports = oneEditAway;

