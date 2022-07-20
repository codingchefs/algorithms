const assert = require('assert');
/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much
 * water it is able to trap after raining.
 * space complexity = O(N), time complexity = O(N)
 *
 * @param {Array} A - array of heights of building
 * @returns {number} - max water able to trap in units
 *
 */
const trap = (A) => {
  let sum = 0;
  let bbl =[];
  let brl = [];
  let N = A.length;
  for (let i = 0; i < N; i++) {
    if (i === 0) {
      bbl[i] = A[0];
    } else {
      bbl[i] = Math.max(A[i], bbl[i - 1]);
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    if (i === N - 1) {
      brl[i] = A[N - 1];
    } else {
      brl[i] = Math.max(A[i], brl[i + 1]);
    }
  }

  let lf = 0;
  for(let i = 1; i < N -1; i++) {
    lf = Math.min(bbl[i-1], brl[i+1]);
    if(lf > A[i]) {
      sum = sum + lf - A[i];
    }
  }

  return sum;
};

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)