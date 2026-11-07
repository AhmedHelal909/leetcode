/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = 'aeiou';
  let window = 0;

  // أول شباك: نعدّ الحروف الصوتية
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) window++;
  }

  let answer = window;

  // نحرك الشباك
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) window++;       // الداخل
    if (vowels.includes(s[i - k])) window--;   // الخارج
    answer = Math.max(answer, window);
  }

  return answer;
};