/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    const
        len1 = arr1.length,
        len2 = arr2.length;
    let
        max = 0;

    for (let i = 0; i < len1; i ++) {
        for (let j = 0; j < len2; j ++) {
            if (i === j) {
                break;
            }

            let value = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);

            if (value > max) {
                max = value;
            }

        }
    }

    return max;

};