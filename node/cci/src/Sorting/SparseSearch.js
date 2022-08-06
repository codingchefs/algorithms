/**
 * Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.
 * Example:
 * Input: ball, ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
 * Solution: Modify the regular binary search so that we move left or right of mid if mid element is "" till we find a
 * non empty string
 */
/**
 * @param value
 * @param {Array} array - array of strings
 * @constructor
 */
const SparseSearch = (value, array) => {
  return SparseSearchImpl(array, 0, array.length - 1, value);
};

const SparseSearchImpl = (array, low, high, value) => {
  // base case
  if (low > high) return -1;

  // mid point
  let mid = Math.floor((low + high) / 2);

  // check if mid element is empty string
  if (array[mid] === "") {
    // initialize left and right
    let left = mid - 1;
    let right = mid + 1;

    while (1) {
      // end condition
      if (left < low && right > high) return -1;

      // check if mid element is non empty for left
      if (left >= low && array[left] !== "") {
        mid = left;
        break;
        // check if mid element is non empty for right
      } else if (right <= high && array[right] !== "") {
        mid = right;
        break;
      }
      // change left and right
      left--;
      right++;
    }
  }

  // perform normal binary search
  if (array[mid] === value) {
    return mid;
  } else if (array[mid] > value) {
    return SparseSearchImpl(array, low, mid - 1, value);
  } else {
    return SparseSearchImpl(array, mid + 1, high, value);
  }

};

module.exports = SparseSearch;
