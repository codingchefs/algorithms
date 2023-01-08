/**
 * Problem Link: https://leetcode.com/problems/encode-and-decode-strings/
 * Problem Statement:
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is
 * decoded back to the original list of strings.
 *
 * Solution:
 *  encode: loop through the strs and append # and number of chars as prefix and join.
 *  decode: loop through till # is found. get the next element as length. slice the elements from the next next element
 *  to length pf string
 *
 * TimeComplexity: O(n)
 * SpaceComplexity: O(n)
 */
/**
 * @param {string[]} strs
 * @return {string}
 */

const encode = (strs) => {
  let res = '';
  for (const s of strs) {
    res += `${s.length}#${s}`;
  }

  return res;
};

/**
 * @param {string} str
 * @return {string []}
 */
const decode = (str) => {
  // initialize result
  let res = [];
  let i = 0;
  // loop through till str length
  while (i < str.length) {
    // initialize j
    let j = i;
    // loop through till # is found
    while (str[j] !== '#') {
      j += 1;
    }
    // get length
    const length = Number(str.slice(i, j));
    // add word to res
    res.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return res;
};

module.exports = {
  encode,
  decode,
};