/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Constraints:
 *  2 <= nums.length <= 104
 *  -109 <= nums[i] <= 109
 *  -109 <= target <= 109
 *  Only one valid answer exists.
 *
 * @param {Array<Number>} nums
 * @param {Number} target
 * @return {Array<Number>}
 */
const TwoSum = (nums, target) => {
  // initialize a hashmap diff: index
  const prevMap = {};

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // find diff between target and current number
    const currentNum = nums[i];
    const diff = target - currentNum;
    // if the diff exists in map, return map[diff], i
    if(prevMap[diff] === 0 || prevMap[diff]) {
      return [prevMap[diff], i];
    }
    // else map[currentNum] = i;
    prevMap[currentNum] = i;
  }

};

module.exports = TwoSum;