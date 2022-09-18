/**
 * Palindrome Permutation:
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 EXAMPLE
 Input: Tact Coa
 Output: True (permutations:"taco cat'; "atco cta '; etc.)

 Solution:
 use a map to save the count of num of times char is found. increment oddCount if value of count in map is odd,
 otherwise decrement it. If oddCount ===1 or oddCount ===0, return true
 */

// check if it is palindrome, sort and check string is equal
const isPermutationOfPalindrome = (phrase) => {
  // initialize oddCount
  let oddCount = 0;
  const map = {};
  // iterate through the string
  for (let i = 0; i < phrase.length; i++) {
    const currentChar = phrase[i];
    // increment count on the map
    if(!map[currentChar]) {
      map[currentChar] = 1;
    } else {
      map[currentChar] = map[currentChar] + 1;
    }

    // check if count is odd, then increment odd
    if(map[currentChar] % 2 === 1) {
      oddCount++;
    } else {
      // otherwise decrement odd
      oddCount--;
    }
  }

  // check if odd is 0 or 1, return true
  return (oddCount === 0 || oddCount === 1);
};

module.exports = isPermutationOfPalindrome;
