/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const m = new Map();

    for (const x of arr) {
        m.set(x, (m.get(x) || 0) + 1);
    }
   
    const counts = new Set(m.values());
    return counts.size == m.size
};