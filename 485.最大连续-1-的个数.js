/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let num = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        num++
      } else {
        num = 0
      }
      max = num > max ? num : max
    }
    return max
};
// @lc code=end

