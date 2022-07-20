const sumOfAllSubsetSums = (arr) => {
  const n = arr.length;
  let sum = 0;
  const premutations = Math.pow(2, n);
  for (let i = 0; i < premutations; i++) {
    console.log(`${i}th set`);

    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) > 0) {
        sum = sum + a[j];
      }
    }
  }

  return sum;
};

/**
 * T.C = O(N)
 * @param arr
 * @returns {number}
 */
const sumOfAllSubsetSums_o = (arr) => {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + a[i];
  }
  sum = sum * Math.pow(2, (n-1));
  return sum;
};

const a = [-2, 6, 4];
console.log(sumOfAllSubsetSums_o(a));