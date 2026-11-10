/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = 0;
    let maxHigh =0;

    for(let i =0 ; i < gain.length; i++){
        current+= gain[i];
        maxHigh = Math.max(maxHigh,current)
    }
    return maxHigh;
};