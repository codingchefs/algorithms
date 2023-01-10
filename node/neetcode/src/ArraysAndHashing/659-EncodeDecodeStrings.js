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
  // no#string
  let res = '';
  strs.forEach(str => {
    res += `${str.length}#${str}`;
  });

  return res;
};

/**
 * @param {string} str
 * @return {string []}
 */
const decode = (str) => {
  // initialize
  let res = [];
  let i = 0;

  // 4#lint4#code4#love3#you
  while (i < str.length) {
    let j = i;
    while (str[j] !== '#') {
      j++;
    }
    const length = Number(str.slice(i, j));
    const currentStr = str.slice(j + 1, (j + 1 + length));
    res.push(currentStr);
    i = j + 1 + length;
  }

  return res;
};

module.exports = {
  encode,
  decode,
};