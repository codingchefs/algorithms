const getMax = (arr, n) => {
  let max = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const handleRadixSort = (arr) => {
  // get maxData
  const maxData = getMax(arr, arr.length);
  // loop with each exp value
  for (let exp = 1; maxData / exp > 0; exp = exp * 10) {
    countSort(arr, arr.length, exp);
  }

  return arr;
};

const countSort = (arr, n, exp) => {
  // initialize count[0..9] with 0s
  const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // loop and update the count array
  // ex: count[(930/1) % 10)] = count[0] = count[0]+ 1;
  for (let i = 0; i < n; i++) {
    count[Math.round(arr[i] / exp) % 10]= count[Math.round(arr[i] / exp) % 10] + 1;
  }

  // loop and update count with cumulative values
  for (let i = 1; i < 10; i++) {
    count[i] = count[i] + count[i - 1];
  }

  const output = [];
  // loop from backward,
  // ex: output[count[(930/1) % 10)] - 1] => output[1 -1] => output[0] = 930;
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.round(arr[i] / exp) % 10] - 1] = arr[i];
    // decrease the count values by 1
    count[Math.round(arr[i] / exp) % 10]--;
  }

  // reverse the output values to add to arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

};

const arrayToSort = [247, 321, 515, 227, 642, 413, 109, 248, 754, 930];
const sortedArray = handleRadixSort(arrayToSort);
console.log(sortedArray.join(','));