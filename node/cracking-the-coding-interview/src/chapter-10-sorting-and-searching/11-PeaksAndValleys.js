/**
 * Peaks and Valleys: In an array of integers, a "peak" is an element which is greater than or equal to the adjacent
 * integers and a "valley" is an element which is less than or equal to the adjacent integers. For example, in the
 * array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. Given an array of integers, sort the array into
 * an alternating sequence of peaks and valleys.
 * EXAMPLE
 * Input: {5, 3, 1, 2, 3}
 * Output: {5, 1, 3, 2, 3}
 */
const sortValleyPeak = (array) => {
  // loop through elements 2 at a time
  for(let i = 1; i < array.length; i += 2) {
    // find biggest among the three adjacent elements
    let biggestIndex = maxIndex(array, i -1, i, i + 1);
    // if i is not the biggestIndex, then swap
    if(i !== biggestIndex) {
      swap(array, i , biggestIndex);
    }
  }

  return array;
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const maxIndex = (array, a, b , c) => {
  let len = array.length;
  // get indexes after validity check
  let aValue = (a >= 0 && a < len) ? array[a] : Number.MIN_VALUE;
  let bValue = (b >= 0 && b < len) ? array[b] : Number.MIN_VALUE;
  let cValue = (c >= 0 && c < len) ? array[c] : Number.MIN_VALUE;

  // get max of the three elements
  let max = Math.max(aValue, Math.max(bValue, cValue));
  // return the max index
  if(aValue === max) return a;
  else if (bValue === max) return b;
  else return c;
};

console.log(sortValleyPeak([9, 1, 0, 4, 8, 7]));
module.exports = sortValleyPeak;