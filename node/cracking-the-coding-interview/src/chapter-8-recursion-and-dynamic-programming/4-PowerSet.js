/**
 * Power Set: Write a method to return all subsets of a set.
 * Time complexity - O(2^n * n)
 * Space Complexity - O(2^n * n)
 */

const PowerSet = (nums) => {
  const result = [];
  // call gs recursively
  generateSubSets(0, nums, [], result);
  return result;
};

const generateSubSets = (index, nums, current, subsets) => {
  // base case
  if (index === nums.length) {
    subsets.push(current.slice());
    return;
  }

  // recurse on dfs

  // exclude
  generateSubSets(index + 1, nums, current, subsets);

  // include
  current.push(nums[index]);
  generateSubSets(index + 1, nums, current, subsets);
  current.pop();
}

module.exports = PowerSet;