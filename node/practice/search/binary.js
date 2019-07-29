const findByBinarySearch = (arr, lb, ub, item) => {
  let beg = lb;
  let end = ub;
  let mid = Math.round((beg + end) / 2);
  while (arr[mid] !== item && beg <= end) {
    if (arr[mid] > item) {
      end = mid - 1;
    } else {
      beg = mid + 1;
    }

    mid = Math.round((beg + end) / 2);
  }

  let loc;
  if (arr[mid] === item) {
    loc = mid;
  } else {
    loc = -1;
  }

  return loc;
};

const arrayToSearch = [10, 17, 20, 25, 33, 37, 41, 53];
const index = findByBinarySearch(arrayToSearch, 0, arrayToSearch.length, 25);
console.log(index);