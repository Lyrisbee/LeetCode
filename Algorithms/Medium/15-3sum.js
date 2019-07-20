/**
 * Description
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {

    const
        len = nums.length,
        numSet = new Set(nums),
        result = [];

    let
        left = 0, mid = 1;

    nums.sort((a, b) => a - b);
    
    // 至少三個元素，且第一位必須為負數
    if (len < 3 || nums[0] > 0) {
        return [];
    }

    for (left = 0; left + 2 < len; left ++) {

        for (mid = left + 1; mid + 1 < len; mid ++) {

            if (nums[left] + nums[mid] > 0) {
                break;
            }

			// 找出符合 left + mid = target
            let target = (nums[left] + nums[mid]) * -1;

            // 檢查是否有 target 值存在，又因 set 相同值只會存一次，故需要另外檢查 mid 和 target 相同值的狀況
            if (nums[mid] < target && numSet.has(target) || nums[mid] === target && nums[mid] === nums[mid + 1]) {
                result.push([nums[left], nums[mid], target]);
            }

            //略過相同的 mid 數，避免下輪拿到相同的值
            while (mid + 1 < len && nums[mid] === nums[mid + 1]) {
                mid ++;
            }
        }
        
		//略過相同的 left 數，避免下輪拿到相同的值
        while (left + 2 < len && nums[left] === nums[left + 1]) {
                left ++;
        }
    }

    return result;
};