/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let zeros = 0;
  let best = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1) ندخّل
    if (nums[right] === 0) zeros++;

    // 2) غلط = أكتر من صفر واحد
    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    // 3) نسجّل أكبر شباك
    best = Math.max(best, right - left + 1);
  }

  // لازم نمسح عنصر
  return best - 1;
};