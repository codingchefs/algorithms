/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements
 * of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @param {Array<Number>} nums
 * @return {Array<Number>} nums
 * @constructor
 */
const ProductExceptSelf = (nums) => {
  let res = [];
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    res[i] = res[i] === -0 ? 0 : res[i];
    prefix *= nums[i];
  }
  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    res[j] = res[j] === -0 ? 0 : res[j];
    postfix *= nums[j];
  }

  return res;
};

module.exports = ProductExceptSelf;