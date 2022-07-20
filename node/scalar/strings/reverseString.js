/**
 * Given a string A, you are asked to reverse the string and return the reversed string.
 * ex: A = "scaler"
 * @param list
 * @param a
 * @param b
 */

const swap = (list, a, b) => {
  [list[a], list[b]] = [list[b], list[a]]
};

const reverseString = (str) => {
  const strLength = str.length;
  const charArray = str.split('');
  let l = 0;
  let r =strLength - 1;
  while(l < r) {
    swap(charArray, l, r);
    l++;
    r--;
  }

  return charArray.join('');

};

console.log(reverseString('Samantha'));