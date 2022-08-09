/**
 * TODO: To be revisited after bit manipulation
 *
 * Find Duplicates:
 * You have an array with all the numbers from 1 to N, where N is at most 32,000. The array may have duplicate entries
 * and you do not know what N is. With only 4 kilobytes of memory available, how would you print all duplicate elements
 * in the array?
 */

const BitSet = require('../../src/chapter-10-sorting-and-searching/Helpers/BitSet');

const findDuplicates = (array) => {
  let bs = new BitSet(32000);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let num0 = num - 1;

    if (bs.get(num0)) {
      result.push(num);
    } else {
      bs.set(num0);
    }
  }

  return result;
};

module.exports = findDuplicates;