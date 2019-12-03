/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let num = 1;
    let hash = {}
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      let val = nums[i];
      if (val < 1) continue;
      if (!hash[val]) {
        hash[val] = true;
      } else {
        continue;
      }

      if (val == num) {
        num++;
      } else {
        break
      }
    }
    return num;
};
// @lc code=end

