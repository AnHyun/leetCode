/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let len = nums.length
  let hash = {}
  let result = new Set()
  for (let i = 0; i < len; i++) {
    let v = nums[i]
    hash[v] ? hash[v]++ : hash[v] = 1
    if (hash[v] > len/3) {
      result.add(nums[i])
    }
  }
  return [...result]
};
// @lc code=end

