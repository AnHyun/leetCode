/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 方法一 
    // nums = nums.sort((a, b) => a - b)
    // for (var i = 0; i < nums.length; i++) {
    //   if (i !== nums[i]) {
    //     return i
    //   }
    // }
    // return i

    // 方法二
    // let set = new Set(nums)
    // for (var i = 0; i < nums.length; i++) {
    //   if (!set.has(i)) return i
    // }
    // return i

    // 方法三 高斯求和公式
    let len = nums.length
    let exceptNum = (len * (len + 1)) / 2
    let actualNum = nums.reduce((prev, curr) => {
      return prev + curr
    }, 0)
    return exceptNum - actualNum
};
// @lc code=end

