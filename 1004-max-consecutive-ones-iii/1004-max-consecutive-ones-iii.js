/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    /**
        *let left = 0;
    for (let right = 0; right < n; right++) {
    // 1) ضيف nums[right] للشباك (حدّث العدّاد)

    while (/* الشباك مش سليم */ //) {
        // 2) شيل nums[left] من الشباك (حدّث العدّاد)
    /* left++;
    }

    // 3) حدّث الإجابة (right - left + 1)
    }    
     */
     let left = 0;
  let zeros = 0;
  let answer = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1) نوسّع
    if (nums[right] === 0) zeros++;

    // 2) لو الشباك مش سليم، نصغّر
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    // 3) نسجل أطول شباك
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};