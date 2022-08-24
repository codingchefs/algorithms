/**
 * Parens: Implement an algorithm to print all valid (i.e., properly opened and closed) combinations of n pairs of
 * parentheses.
 * EXAMPLE
 * Input: 3
 * Output: ((())), (()()), (())(), ()(()), ()()()
 */
const Parens = (n) => {
  const output_arr = [];
  backTrack(output_arr, '', 0, 0, n);
  return output_arr;
};

const backTrack = (output_arr, current_string, open, close, max) => {
  // check if current_string is double the max, add it to output
  if(current_string.length === 2 * max) {
    output_arr.push(current_string);
    return;
  }

  if(open < max) {
    backTrack(output_arr, current_string + '(', open + 1, close, max);
  }

  if(close < open) {
    backTrack(output_arr, current_string + ')', open, close + 1, max);
  }
};

module.exports = Parens;