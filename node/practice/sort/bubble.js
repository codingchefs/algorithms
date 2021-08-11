const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
};

/*const bubbleSort = (arr) => {
  for(let i= 0, n = arr.length; i < n ;i++) {
    for(let j = 0; j < n-i; j++) {
      if(arr[j] > arr[j+ 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};*/


// 22, 11, 35, 41, 47, 56
const bubbleSort = (array) => {
  // parse the array i = 0 to n
  for (let i = 0, n = array.length; i < n - 1; i++) {
    // parse the array j = 0 to n - i
    for (let j = 0; j < n - i; j++) {
      // compare if j > j + 1
      if (array[j] > array [j + 1]) {
        // swap j and j + 1
        swap(array, j, j + 1);
      }
    }
  }

  // return array
  return array;
}

const bubbleSortModified = array => {
  let flag = 1;

  for (let i = 0, n = array.length; i < n && flag === 1; i++) {
    flag = -1;
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        flag = 1;
      }
    }
  }

  return array;
};


/*const bubbleSortModified = (arr) => {
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
};*/

// const arrayToSort = [56, 47, 41, 35, 22, 11];
// const sortedArray = bubbleSort(arrayToSort);

const arrayToSort = [22, 11, 35, 41, 47, 56, 41];
// const sortedModArray = bubbleSortModified(arrayToSort);
const sortedModArray = bubbleSortModified(arrayToSort);
console.log(sortedModArray.join(','));



