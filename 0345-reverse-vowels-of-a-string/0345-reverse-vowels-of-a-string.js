/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let left =0;
  let arr = s.split('')
  let right = s.length-1
  let vowels = ['a','e','o','u','i']
  while(left < right){
  if (!vowels.includes(arr[left].toLowerCase())) {
      
    left++;
  }else if (!vowels.includes(arr[right].toLowerCase())) {
    right--;
    }else{
let temp = arr[left];
arr[left]=arr[right];
arr[right]= temp
left++
right--
    }
  }
  return arr.join('')
};
