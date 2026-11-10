/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
      const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const onlyIn1 = [];
    const onlyIn2 = [];
    for(const x of set1){
      if(!set2.has(x)) onlyIn1.push(x)
    }
   for(const x of set2){
    if(!set1.has(x)) onlyIn2.push(x);
   }
   return [onlyIn1,onlyIn2]
};