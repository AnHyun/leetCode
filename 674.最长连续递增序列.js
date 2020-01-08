/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length == 1) return 1
    
    let maxLen = 0, sum = 1
    for (let i = 1; i < nums.length; i++) {
      sum = nums[i] > nums[i-1] ? sum+1 : 1
      maxLen = Math.max(maxLen, sum)
    }
    return maxLen
};
// @lc code=end

