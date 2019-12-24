/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // 方法一
  // let hash = {}
  // for (let i = 0; i < nums.length; i++) {
  //   let v = nums[i]
  //   if (hash[v] === undefined) {
  //     hash[v] = i
  //   } else {
  //     if (i - hash[v] <= k) {
  //       return true
  //     } else {
  //       hash[v] = i
  //     }
  //   }
  // }
  // return false

  // 方法二
  let set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false

  // 方法三
  // for (let i = 0; i < nums.length; i++) {
  //   let temp = i
  //   for(let j = i+1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       if (j - temp <= k) {
  //         return true
  //       } else {
  //         temp = j
  //       }
  //     }
  //   }
  // }
  // return false
};
// @lc code=end

