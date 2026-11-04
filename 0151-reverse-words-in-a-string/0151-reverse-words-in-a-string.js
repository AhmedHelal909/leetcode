/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//    let words = s.trim().split(/\s+/);
//    let left =0;
//    let right = words.length-1;
//    while(left<right){
//     let temp = words[left];
//     words[left]= words[right];
//     words[right]=temp;
//     left++
//     right--

//    }
//   return (words.join(' '))
// };
var reverseWords = function(s) {
  let words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else if (word !== "") {
      words.push(word);
      word = "";
    }
  }
  if (word !== "") words.push(word);

  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    let temp = words[left];
    words[left] = words[right];
    words[right] = temp;
    left++;
    right--;
  }

  return words.join(' ');
};