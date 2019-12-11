/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return true
      }
    }
    return false
};
// @lc code=end

