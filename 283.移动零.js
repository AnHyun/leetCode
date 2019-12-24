/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 方法一
  // let j = 0
  // for (let i = 0; i < nums.length; i++) {
  //   j++
  //   if(j >= nums.length) break
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1)
  //     nums.push(0)
  //     i--
  //   }
  // }

  // 方法二
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i]
    }
  }
  while(index < nums.length) {
    nums[index++] = 0
  }
};
// @lc code=end

