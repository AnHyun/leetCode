/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // 解法一
    // let arr = []
    // let average = -Number.MAX_VALUE
    // for (let i = 0; i < nums.length; i++) {
    //   arr.push(nums[i])
    //   if (arr.length == k) {
    //     let total = arr.reduce((prev, curr) => {
    //       return prev + curr
    //     })
    //     average = total > average ? total : average
    //     arr.shift()
    //   }
      
    // }
    // return average / k

    // 解法二
    let sum = 0
    let max = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
      if (i < k) {
        sum += nums[i]
      } else {
        sum = sum + nums[i] - nums[i-k]
      }
      if (i >= k - 1) {
        max = max > sum ? max : sum
      }
    }
    return max / k
};
// @lc code=end

