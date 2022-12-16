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
  // initialize prefix and postfix
  let result = [];
  let prefix = 1;

  // iterate through array to find the prefix array
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    result[i] = (result[i] === -0 ? 0 : result[i]);
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    result[i] = (result[i] === -0 ? 0 : result[i]);
    postfix *= nums[i];
  }

  return result;

};

module.exports = ProductExceptSelf;