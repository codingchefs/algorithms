const majorityElement = (arr) => {
  let ele = arr[0];
  const N = arr.length;
  let freq = 1;
  for (let i = 1; i < N; i++) {
    if (freq === 0) {
      ele = arr[i];
      freq = 1;
    } else if (ele !== arr[i]) {
      freq--;
    } else {
      freq++;
    }
  }

  let c = 0;
  for (let i = 0; i < N; i++) {
    if (ele === arr[i]) {
      c++;
    }
  }

  if (c > N / 2) return ele;
};

const a = [5, 5, 2, 3, 5, 1, 5, 5, 5, 5, 5, 4, 1, 1, 1, 6, 5];
console.log(`majority element is: ${majorityElement(a)}`);