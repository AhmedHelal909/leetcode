/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0, right = height.length - 1, best = 0;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    best = Math.max(best, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return best;
};