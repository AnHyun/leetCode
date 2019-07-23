/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let aX = x.toString().split('');
  let prefix = '';
  let index = aX[0].indexOf('-');
  if (index !== -1) {
    prefix = aX.splice(0, 1);
  }
  let sX = aX.reverse().join('')
  let nX = parseInt(prefix + sX);

  if (nX < Math.pow(-2,31) || nX > Math.pow(2,31) -1) {
    return 0;
  }
  return nX
};

