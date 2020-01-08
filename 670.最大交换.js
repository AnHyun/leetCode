/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let nums = String(num).split('')
  for (let i = 0; i < nums.length; i++) {
    let arr = nums.slice(i, nums.length)
    let max = String(Math.max(...arr))
    if (max !== nums[i]) {
      let index = nums.lastIndexOf(max);
      [nums[i], nums[index]] = [nums[index], nums[i]]
      return Number(nums.join(''))
    }
  }
  return Number(nums.join(''))

};
// @lc code=end

