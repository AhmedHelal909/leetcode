/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  let n = nums.length;

  // الشمال: حاصل ضرب اللي قبل الخانة
  let left = new Array(n);
  let product = 1;
  for (let i = 0; i < n; i++) {
    left[i] = product;
    product = product * nums[i];
  }

  // اليمين: حاصل ضرب اللي بعد الخانة
  let right = new Array(n);
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    right[i] = product;
    product = product * nums[i];
  }

  // ندمجهم بالضرب
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
};