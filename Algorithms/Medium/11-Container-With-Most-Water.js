/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }

    return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0,
        i = 0,
        j = height.length - 1;

    // 從左右接近
    while (i < j) {
        let minH = Math.min(height[i], height[j]);

        max = Math.max(max, minH * (j - i));

        // 因為向內靠攏(寬變小)，所以下一個點必須比現在最小高還高才有機會
        // 判斷目前最小高是 i 方向還是 j 方向
        while (height[i] <= minH && i < j) i++;
        while (height[j] <= minH && i < j) j--;
    }

    return max;
};
