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
 * @param listA
 * @param listB
 * @param lastA
 * @param lastB
 */
const sortedMerge = (listA, listB, lastA, lastB) => {
  const newListA = [...listA];
  const newListB = [...listB];
  let indexA = lastA - 1;
  let indexB = lastB - 1;
  let indexMerged = lastA + lastB - 1;

  while (indexB >= 0) {
    if (indexA >= 0 && newListA[indexA] > newListB[indexB]) {
      newListA[indexMerged] = newListA[indexA];
      indexA -= 1;
    } else {
      newListA[indexMerged] = newListB[indexB];
      indexB -= 1;
    }

    indexMerged -= 1;
  }

  return newListA;
};

module.exports = sortedMerge;
