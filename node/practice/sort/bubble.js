const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
};

const bubbleSort = (arr) => {
  for(let i= 0, n = arr.length; i < n ;i++) {
    for(let j = 0; j < n-i; j++) {
      if(arr[j] > arr[j+ 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const bubbleSortModified = (arr) => {
  let flag = 1;
  for (let i = 0, n = arr.length; i < n && flag === 1; i++) {
    flag = -1;
    for (let j = 0; j < n - i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        flag = 1;
      }
    }
  }
  return arr;
};

// const arrayToSort = [56, 47, 41, 35, 22, 11];
// const sortedArray = bubbleSort(arrayToSort);

const arrayToSort = [22, 11, 35, 41, 47, 56];
const sortedModArray = bubbleSortModified(arrayToSort);
console.log(sortedModArray.join(','));



