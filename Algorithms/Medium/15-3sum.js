/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    const
        len = nums.length,
        numSet = new Set(nums),
        result = [];

    let
        left = 0, mid = 1, right = len - 1;

    // at least there elements
    if (len < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);
    for (left = 0; left < len; left ++) {

        if (nums[left] > 0) {
            break;
        }

        if (nums[left] === 0 && left + 2 < len) {

            if (nums[left + 1] === 0 && nums[left + 2] === 0) {
                result.push([0, 0, 0]);
            }

            break;
        }

        for (mid = left + 1; mid < len; mid ++) {

            if (nums[left] + nums[mid] > 0) {
                break;
            }

            let target = (nums[left] + nums[mid]) * -1;

            if (nums[mid] < target && numSet.has(target)) {
                result.push([nums[left], nums[mid], target]);
            }

            if (nums[mid] === target && mid + 1 < len && nums[mid] === nums[mid + 1]) {
                result.push([nums[left], nums[mid], target]);
            }

        }
    }

    return result.filter(( t = {}, a => !( t[a] = a in t) ));
};