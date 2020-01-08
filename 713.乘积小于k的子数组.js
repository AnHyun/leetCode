/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0

    let now = 1, times = 0, left = 0
    for (let right = 0; right < nums.length; right++) {
      now *= nums[right]
      while (now >= k) now /= nums[left++]
      times += right - left + 1
    }
    return times
};
// @lc code=end

