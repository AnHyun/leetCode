/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let array = []
  for(let i = 1; i < nums.length+1; i++) {
    if (!nums.includes(i)) {
      array.push(i)
    }
  }
  return array
};
// @lc code=end

