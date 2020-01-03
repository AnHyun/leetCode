/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0, count = 0
    while(i < flowerbed.length) {
      if (
          flowerbed[i] == 0
          && (i == 0 || flowerbed[i - 1] == 0) 
          && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
        ) {
        flowerbed[i++] = 1
        count++
      }
      if (count >= n) return true 
      i++
    }
    return false
};
// @lc code=end

