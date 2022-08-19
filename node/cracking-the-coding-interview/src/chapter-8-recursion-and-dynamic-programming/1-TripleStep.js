/**
 * A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a
 * method to count how many possible ways the child can run up the stairs.
 */
const findStep = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return findStep(n - 3) + findStep(n - 2) + findStep(n - 1);
  }
}

/**
 * bottom up approach
 * @param n
 * @returns {number|*}
 */
const findStepMemo = (n) => {
  let res = [];
  res[0] = 1;
  res[1] = 1;
  res[2] = 2;
  for(let i = 3; i <= n ; i++) {
    res[i] = res[i - 3] + res[i - 2] + res[i -1];
  }

  return res[n];
}

module.exports = findStepMemo;