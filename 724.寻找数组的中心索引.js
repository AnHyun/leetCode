/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length < 2) return -1
    let leftSum = 0;
    let sum = nums.reduce((pre, cur) => pre + cur)

    for (let i = 0; i < nums.length; i++) {
      if (sum - leftSum - nums[i] == leftSum) return i
      leftSum += nums[i]
    }
    return -1
};
// @lc code=end

