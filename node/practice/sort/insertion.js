const insertionSort = (arr) => {
  for(let i = 0, n = arr.length; i< n; i++) {
    if(arr[i] > arr[i+1]) {
      let temp = arr[i + 1];
      let loc = i + 1;
      while(loc !== 0 && arr[loc -1] > temp) {
        arr[loc] = arr[loc -1];
        loc = loc - 1;
      }
      arr[loc] = temp;
    }
  }
  return arr;
};

const arrayToSort = [44, 77, 22, 88, 33, 66, 11, 55];
const sortedArray = insertionSort(arrayToSort);
console.log(sortedArray.join(','));



