/**
 * Magic Index: A magic index in an array A[ 1.•.n-1] is defined to be an index such that A[i]=i.
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
 * FOLLOW UP
 * What if the values are not distinct?
 */

const MagicFast = (array) => {
  return magicFastImpl(array, 0, array.length - 1);
};

// -10, -5, 2, 2, 2, [3], 4, 7, 9, 12, 13
const magicFastImpl = (array, start, end) => {
  // end condition
  if (end < start) return -1;

  // find mid element
  const midIndex = Math.floor((start + end) / 2);
  const midValue = array[midIndex];

  // check if midIndex and midValue are same, return index
  if (midIndex === midValue) return midIndex;

  // search left part - get minimum of midIndex left element and midValue
  const leftIndex = Math.min(midIndex - 1, midValue);
  // get left index
  const left = magicFastImpl(array, start, leftIndex);
  // if left greater than zero, return left
  if (left >= 0) return left;

  // search right part - get max of midIndex right element and midValue
  const rightIndex = Math.max(midIndex + 1, midValue);
  // get right index
  const right = magicFastImpl(array, rightIndex, end);
  return right;
};

module.exports = MagicFast;