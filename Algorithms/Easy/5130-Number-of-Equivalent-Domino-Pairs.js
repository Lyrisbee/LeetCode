/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const len = dominoes.length;

    let count = 0;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let a = dominoes[i][0],
                b = dominoes[i][1],
                c = dominoes[j][0],
                d = dominoes[j][1];

            if ((a == c && b == d) || (a == d && b == c)) {
                count++;
            }
        }
    }

    return count;
};
