/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    const
          len1 = nums1.length,
          len2 = nums2.length;
    let
          target = [];

    if (len1 === 0 || len2 === 0) {
        target = (len1 === 0) ? nums2 : nums1;
    }

    if (target.length > 0) {
        const half = Math.floor(target.length/2);
        return (target.length % 2 === 0) ? (target[half] + target[half-1]) / 2 : target[half];
    }

    let pos1 = 0,
        pos2 = 0;

    const half = Math.floor((len1 + len2)/2);

    for (let i = 0; i <= half; i++) {

        if (pos2 >= len2) {
            target.push(nums1[pos1]);
            pos1 += 1;
        } else if (pos1 >= len1) {
            target.push(nums2[pos2]);
            pos2 += 1;
        } else if (nums1[pos1] >= nums2[pos2]) {
            target.push(nums2[pos2]);
            pos2 += 1;
        } else if (nums1[pos1] < nums2[pos2]) {
            target.push(nums1[pos1]);
            pos1 += 1;
        }
    }

    const target_len = target.length;

    return ((len1 + len2) % 2 === 0) ? (target[target_len - 1] + target[target_len - 2]) /2 : target[target_len - 1];
};