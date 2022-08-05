/**
 * Group Anagrams: Write a method to sort an array of strings so that all the anagrams are
 * next to each other.
 * Solution: Use a Map with sorted word as key and unsorted words list as value. Iterate the Map
 * and keep all the values in array and return
 */

const groupByAnagrams = (words) => {
  // create a hashmap
  const map = new Map();
  // loop through words.
  for (const word of words) {
    // sort the word
    const sortedWord = word.split('').sort().join('');
    // if the sorted word doesnt exist as key, then create a new key and array and add to list
    const currentValue = map.has(sortedWord) ? map.get(sortedWord) : [];
    currentValue.push(word);
    map.set(sortedWord, currentValue);
  }

  const groupedAnagrams = [];
  for (const [key, value] of map) {
    groupedAnagrams.push(...value);
  }
  return groupedAnagrams;
}

module.exports = groupByAnagrams;
