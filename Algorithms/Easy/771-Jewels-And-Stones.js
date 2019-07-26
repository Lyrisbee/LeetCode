/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const stone = Array(58).fill(0);

    for (let i = 0; i < S.length; i++) {
        stone[S.charCodeAt(i) - 65] += 1;
    }

    let sum = 0;

    for (let i = 0; i < J.length; i++) {
        sum += stone[J.charCodeAt(i) - 65];
        stone[J.charCodeAt(i) - 65] = 0;
    }

    return sum;
};
