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
    let oddCount = 0;
    let map = {};
    // increment oddCount if value of count in map is odd and decrement if otherwise
    for (let i = 0; i < phrase.length; i++) {
        const x = phrase[i];
        if (!map[x]) {
            map[x] = 1;
        } else {
            map[x] += 1;
        }

        if (map[x] % 2 === 1) {
            oddCount++;
        } else {
            oddCount--;
        }
    }
    return oddCount === 0 || oddCount === 1;
};

module.exports = isPermutationOfPalindrome;
