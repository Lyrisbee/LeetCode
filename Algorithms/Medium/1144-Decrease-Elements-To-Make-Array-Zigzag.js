/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    const min = [0, 0];

    for (let i = 0; i < nums.length; i++ ) {
        let
            l = (i > 0) ? nums[i - 1] : 4e9,
            r = (i + 1 < nums.length) ? nums[i + 1] : 4e9,
            sub = nums[i] - Math.min(l, r);
        
        if (sub >= 0) {
            min[i%2] += sub + 1;
        }
    }
    
    return Math.min(min[0], min[1]);
};