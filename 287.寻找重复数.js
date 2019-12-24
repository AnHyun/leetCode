/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // 方法一
  // for (let i = 0; i < nums.length; i++) {
  //   if(nums.indexOf(nums[i]) !== i) {
  //     return nums[i]
  //   }
  // }

  // 方法二
  // let set = new Set()
  // for (let i = 0; i < nums.length; i++) {
  //   if (set.has(nums[i])) return nums[i];
  //   set.add(nums[i])
  // }

  // 方法三
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[j]
      }
    }
  }
};
// @lc code=end

