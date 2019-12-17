/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];
    if (hash[target]) {
      delete hash[target];
    } else {
      hash[target] = 1;
    }
  }
  return Object.keys(hash).join()
};
// @lc code=end

