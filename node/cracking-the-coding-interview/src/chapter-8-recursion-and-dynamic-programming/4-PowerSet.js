/**
 * Power Set: Write a method to return all subsets of a set.
 * Time complexity - O(2^n * n)
 * Space Complexity - O(2^n * n)
 */

const PowerSet = (nums) => {
  const subsets = [];
  generateSubSets(0, nums, [], subsets);
  return subsets;
};

const generateSubSets = (index, nums, current, subsets) => {
  // console.log(`gs(${index}, ${JSON.stringify(current)})`);
  // base case
  if (index === nums.length) {
    subsets.push(current.slice())
    // console.log(`subsets: ${JSON.stringify(subsets)}`);
    return;
  }

  // dfs recursive case

  // exclude
  generateSubSets(index + 1, nums, current, subsets);

  // include
  current.push(nums[index]);
  generateSubSets(index + 1, nums, current, subsets);
  current.pop();
}

module.exports = PowerSet;