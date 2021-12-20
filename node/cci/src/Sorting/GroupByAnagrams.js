/**
 * Group Anagrams: Write a method to sort an array of strings so that all the anagrams are
 * next to each other.
 * Solution: Use a Map with sorted word as key and unsorted words list as value. Iterate the Map
 * and keep all the values in array and return
 */

const groupByAnagrams = (words) => {
  const map = new Map();
  words.forEach((word) => {
    const sortedWord = word.split('').sort().join('');
    const currentValue = map.has(sortedWord) ? map.get(sortedWord) : [];
    currentValue.push(word);
    map.set(sortedWord, currentValue);
  });

  const groupedList = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of map) {
    groupedList.push(...value);
  }

  return groupedList;
};

module.exports = groupByAnagrams;
