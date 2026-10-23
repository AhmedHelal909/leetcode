/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    for(let i =0 ; i < candies.length; i++){
        candies[i] + extraCandies >= Math.max(...candies) ? res.push(true)
        :res.push(false)
   
    }
    return res;
};