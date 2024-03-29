/**
 * Permutations without Dups: Write a method to compute all permutations of a string of unique characters.
 */
const PermutationsWithoutDups = (str) => {
  let result = [];
  permute(str, 0, str.length - 1, result);
  return result;
};

const swap = (a, i, j) => {
  arr = a.split('');
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join('');
};

const permute = (str, left, right, result) => {
  // if left is equal to right, then push into result
  if(left === right) {
    result.push(str);
  } else {
    // iterate through left to right
    for(let i = left; i <= right; i++) {
      // get swapped string
      const swapped = swap(str, left, i);
      // permute swapped string with incrementing left
      permute(swapped, left + 1, right, result);
    }
  }

}

module.exports = PermutationsWithoutDups;