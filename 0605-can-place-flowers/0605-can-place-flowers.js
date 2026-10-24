/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
        const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

        if (flowerbed[i] === 0 && prevEmpty && nextEmpty) {
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
};