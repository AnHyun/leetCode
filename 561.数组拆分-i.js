/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let n = nums.length / 2;
  let count = 0;
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
    count += nums[2*i]
  } 
  return count
};
// @lc code=end

