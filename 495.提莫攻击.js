/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let len = timeSeries.length;
  if (len === 0) return 0

  let total = duration
  for (let i = 1; i < len; i++) {
    let val = timeSeries[i] - timeSeries[i-1]
    if (val < duration) {
      total += val
    } else {
      total += duration
    }
  }
  return total
};
// @lc code=end

