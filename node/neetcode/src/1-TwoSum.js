const TwoSum = (nums, target) => {
  // create a val to index map
  const prevMap = {}; // val: index

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (prevMap[diff] === 0 || prevMap[diff])
      return [prevMap[diff], i];
    prevMap[num] = i;
  }
};

module.exports = TwoSum;