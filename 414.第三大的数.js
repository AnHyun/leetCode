/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = -Number.MAX_VALUE
    let medium = -Number.MAX_VALUE
    let min = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
      let val = nums[i]
      if (val > max) {
        min = medium
        medium = max
        max = val;
      } else if (val === max || val === medium || val === min) {
        continue
      } else if (val > medium) {
        min = medium
        medium = val
      } else if (val > min) {
        min = val
      }
    }
    if (min !== -Number.MAX_VALUE) return min
    return max
};
// @lc code=end

