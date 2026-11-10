/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    const ch = chars[read];
    let count = 0;

    // 1) عدّ المجموعة
    while (read < chars.length && chars[read] === ch) {
      read++;
      count++;
    }

    // 2) اكتب الحرف
    chars[write++] = ch;

    // 3) اكتب العدد لو أكتر من 1
    if (count > 1) {
      for (const d of String(count)) {
        chars[write++] = d;
      }
    }
  }

  return write;
};