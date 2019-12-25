/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  // 方法一
  // return nums.filter((item, index) => {
  //   return nums.indexOf(item) !== index
  // })

  // 方法二
  // let hash = {}
  // let array = []
  // for (let i = 0; i < nums.length; i++) {
  //   let v = nums[i]
  //   if (hash[v]) {
  //     array.push(v)
  //   }
  //   hash[v] = true 
  // }
  // return array

  // 方法三
  let array = []
  for (let v of nums) {
    if(nums[Math.abs(v)-1] > 0) {
      nums[Math.abs(v)-1] *= -1 
    } else {
      array.push(Math.abs(v))
    }
  }
  return array
};
// @lc code=end

