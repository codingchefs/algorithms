/**
 * You are given an array-like data structure Listy which lacks a size method. It does, however,
 * have an elementAt(i) method that returns the element at index i in 0( 1) time. If i is beyond
 * the bounds of the data structure, it returns -1. (For this reason, the data structure only
 * supports positive integers.) Given a Listy which contains sorted, positive integers, find
 * the index at which an element x occurs. If x occurs multiple times, you may return any
 * index.
 *
 * solution: We need to exponentially search (1, 2, 4, ...) for each value at index incrementally
 * till we exceed the size of the list and use the index to do binarySearch on the array.
 */
const binarySearch = require('../../../practice/search/binary');

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'elementAt', {
  value: (value) => this[value] || -1,
});

/**
 * @param {Array} list
 * @param {number} value
 * @returns {number}
 */
const sortedSearch = (list, value) => {
  let index = 1;

  while (list.elementAt(index) !== -1 && list.elementAt(index) < value) {
    index *= 2;
  }

  return binarySearch(list, value, index / 2, index);
};

module.exports = sortedSearch;
