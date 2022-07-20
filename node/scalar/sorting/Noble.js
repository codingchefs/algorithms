const getNobleCount = (arr, N) => {
  let less = 0;
  let ans = 0;

  if (arr[0] === 0) ans++;

  for (let i = 1; i < N; i++) {
    if (arr[i] !== arr[i - 1]) {
      less = i;
    } else {
      // less wont change
    }

    if (less === arr[i]) {
      ans++
    }
  }

  return ans;
}

const x = [-3, 0, 2, 2, 5, 5, 5, 5, 8, 8, 10, 10, 10, 14];
console.log(getNobleCount(x, x.length))