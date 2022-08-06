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

/**
 * @param {Array} list
 * @param {number} value
 * @returns {number}
 */
const sortedSearch = (list, value) => {
  // initialize index to be 1
  let index = 1;
  // loop till element exists and element is less than the element at index in array
  while (list[index] && value > list[index]) {
    index *= 2;
  }

  return binarySearch(list, value, Math.floor(index / 2), index);
};

const binarySearch = (list, value, start, end) => {
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (list[mid] === value) {
      return mid;
    } else if (list[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

module.exports = sortedSearch;
