/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // return Math.min(...nums)

  
  // let n = nums[0];
  // for (let i = 1; i < len; i++) {
  //   if (nums[i] < n) {
  //     n = nums[i]
  //   }
  // }
  // return n;
  
  let len = nums.length;
  if (len === 1) return nums[0];
  if (nums[len - 1] > nums[0]) return nums[0]

  for (let i = 1; i < len; i++) {
    if(nums[i] < nums[i-1]) {
      return nums[i]
    }
  }
};
// @lc code=end

