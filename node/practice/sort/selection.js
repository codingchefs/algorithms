const findMinLoc = (arr, startLoc, endLoc) => {
  let minLoc = startLoc;
  for(let j=startLoc + 1; j < endLoc; j++) {
    if(arr[minLoc] > arr[j]) {
      minLoc = j;
    }
  }

  return minLoc;
};

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
};

const selectionSort = (arr) => {
  for(let i=0, n = arr.length; i < n-1; i++) {
    // find minLoc
    let minLoc = findMinLoc(arr, i, n);
    //swap minLoc with i if i is not equal to minLoc
    if(minLoc !== i) {
      swap(arr, minLoc, i);
    }
  }

  return arr;
};

const arrayToSort = [44, 77, 22, 88, 33, 66, 11, 55];
const sortedArray = selectionSort(arrayToSort);
console.log(sortedArray.join(','));