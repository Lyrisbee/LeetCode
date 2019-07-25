/**
 * @param {string} s
 * @return {string}
 */
/**
 * 說明
 * 假設題目 "abcba"
 * P[left][right] 是指 left 到 right 為迴文
 *
 * P[0][0] = true
 * P[0][1] = s[0] === s[1]
 * P[0][2] = s[0] === s[2] && P[0][1]
 * ...
 * P[1][0] = not exist
 * ...
 * P[1][4] = s[1] === s[4] && P[2][3]
 *
 * 以此類推
 *
 * 回文需要符合
 * 1. s[left] === s[right]
 * 2. P[left+1] === P[right-1] 或 left + 1 >= right -1 ([0][0], [0][1] 只要檢查值是否一樣)
 */
var longestPalindrome = function(s) {
    const len = s.length,
        isPalindromic = [...Array(len)].map((x) => Array(len).fill(false));

    let start = 0,
        max = 1;

    for (let right = 1; right < len; right++) {
        for (let left = right - 1; left >= 0; left--) {
            if (
                (left + 1 >= right - 1 || isPalindromic[left + 1][right - 1]) &&
                s.substr(left, 1) === s.substr(right, 1)
            ) {
                isPalindromic[left][right] = true;
                if (right - left + 1 > max) {
                    max = right - left + 1;
                    start = left;
                }
            }
        }
    }

    return s.substr(start, max);
};
