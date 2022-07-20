const printAllSubsets = (arr) => {
  const n = arr.length;
  const premutations = Math.pow(2, n);
  for (let i = 0; i < premutations; i++) {
    console.log(`${i}th set`);

    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) > 0) {
        console.log(arr[j]);
      }
    }
  }
};

const a = [1, 2, 3];
printAllSubsets(a);