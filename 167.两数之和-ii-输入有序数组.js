/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let p1 = 0, p2 = numbers.length;
    
    while(p1 < p2) {
      if (numbers[p1] + numbers[p2] == target) return [p1+1, p2+1]
      else if (numbers[p1] + numbers[p2] < target) p1++;
      else p2--
    }
    
};


