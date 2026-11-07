/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let window = 0;

for(let i=0; i < k; i++){
window += nums[i];
}
let answer = window;
for( let i = k; i<nums.length; i++){
  window += nums[i];
  window -= nums[i-k];
  answer = Math.max(answer , window);

}
return answer / k;
};