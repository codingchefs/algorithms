const partition1 = (arr, lb, ub) => {
  const pivot = arr[lb];
  let start = lb;
  let end = ub;
  while (start < end) {
    while (arr[start] <= pivot && start < end) {
      start = start + 1;
    }
    while (arr[end] > pivot) {
      end = end - 1;
    }
    if (start < end) {
      swap(arr, start, end);
    }
  }

  arr[lb] = arr[end];
  arr[end] = pivot;
  return end;
};

const partition = (arr, lb, ub) => {
  // fix first element as pivot, declare start, end
  let start = lb;
  let end = ub;
  const pivot = arr[start]
  // iterate through array while start < end
  while(start < end) {
    // while start elements are lower than pivot move start to right
    while(arr[start] <= pivot && start < end) {
      start++;
    }
    // while end elements are greater than pivot move end to left
    while(arr[end] > pivot) {
      end--;
    }
    // else swap the elements if start < end
    if(start < end) {
      swap(arr, start, end);
    }
  }

  // assign end index to pivot
  arr[lb] = arr[end]
  // assign first element to end element
  arr[end] = pivot;
  return end;
};

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  arr[firstIndex] = temp;
};

const quickSort = (arr, lb, ub) => {
  if (lb < ub) {
    const loc = partition(arr, lb, ub);
    quickSort(arr, lb, loc - 1);
    quickSort(arr, loc + 1, ub);
    return arr;
  }
};

const handleQuickSort = (arr) => {
  return quickSort(arr, 0, arr.length -1);
};

const arrayToSort = [60, 40, 20, 95, 90, 30, 50, 70];
const sortedArray = handleQuickSort(arrayToSort);
console.log(sortedArray.join(','));