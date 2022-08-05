/**
 * You are given two sorted arrays, A and B, where A has a large enough buffer at the
 * end to hold B. Write a method to merge B into A in sorted order.
 * A = [10, 12, 13, 14, 18, undefined, undefined, undefined, undefined]
 * B = [2, 4, 6, 8]
 * solution: create a indexMerged to point to the last element of A. compare the values in Array A
 * and Array B starting from last. If element at A is greater than element at B, then keep element
 * at A to the end of Array A and decrement index for A. otherwise keep element at B to the end of
 * Array A and decrement index for B. Also decrement indexMerged always
 *
 * @param list1
 * @param list2
 * @param m
 * @param n
 */

const sortedMerge = (list1, list2, m, n) => {
  // get indexA, indexB and mergedIndex
  const nums1 = [...list1];
  const nums2 = [...list2];
  let indexM = m - 1;
  let indexN = n - 1;
  let mergedIndex = m + n - 1;

  // check condition if ele m is greater than ele n
  while(indexN >= 0) {
    if(indexM >=0 && nums1[indexM] > nums2[indexN]) {
      // push element M to last mergedIndex and decrement indexM
      nums1[mergedIndex] = nums1[indexM];
      indexM--;
    } else {
      // push element N to last mergedIndex and decrement indexN
      nums1[mergedIndex] = nums2[indexN];
      indexN--;
    }

    mergedIndex--;
  }

  return nums1;

};

module.exports = sortedMerge;
