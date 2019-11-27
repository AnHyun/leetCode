/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort()
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i+1; j < nums.length - 1; j++) {
        let temp = nums[i] + nums[j];
        let index = nums.indexOf(-temp, j+1)
        if (index !== -1) {
          res.push([nums[i], nums[j], nums[index]])
        }
      }
    }
    return res;
};
// @lc code=end

