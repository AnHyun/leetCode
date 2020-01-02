/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let snums = [...nums]
    snums.sort((a, b) => a - b)
    let start = nums.length, end = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== snums[i]) {
        start = Math.min(start, i)
        end = Math.max(end, i)
      }
    }
    return (end > start ? end - start + 1 : 0)

};
// @lc code=end

