/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = (nums, target) => {
    const numsToIndexMap = {};
    for(let i =0; i < nums.length; i++) {
      numsToIndexMap[nums[i]] = i;
    }

    for(let i =0; i< nums.length; i++) {
        const compliment = target - nums[i];
        if(numsToIndexMap[compliment]) {
            return [ i, numsToIndexMap[compliment]];
        }
    }
};


const nums = [2, 7, 11, 15];
const target = 26;
console.log(twoSum(nums, target));

/**

v16.0.0/                                           20-Apr-2021 15:57                   -
v16.1.0/                                           04-May-2021 15:13                   -
v16.10.0/                                          22-Sep-2021 20:46                   -
v16.11.0/                                          08-Oct-2021 17:11                   -
v16.11.1/                                          12-Oct-2021 15:24                   -
v16.12.0/                                          20-Oct-2021 14:46                   -
v16.13.0/                                          26-Oct-2021 16:19                   -
v16.13.1/                                          01-Dec-2021 16:13                   -
v16.13.2/                                          10-Jan-2022 23:42                   -
v16.14.0/
 **/