/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0
  let saw = new Set()
  let diff = new Set()
  for (let i of nums) {
    if(saw.has(i-k)) {
      diff.add(i-k)
    }
    if (saw.has(i+k)) {
      diff.add(i)
    }
    saw.add(i)
  }
  return diff.size
};
// @lc code=end

