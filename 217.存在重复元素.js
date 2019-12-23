/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== i) {
        return true
      }
    }
    return false

    // let hash =  {}
    // for (let i = 0; i < nums.length; i++) {
    //   let v = nums[i]
    //   if (hash[v]) return true
    //   hash[v] = true
    // }
    // return false
};
// @lc code=end

