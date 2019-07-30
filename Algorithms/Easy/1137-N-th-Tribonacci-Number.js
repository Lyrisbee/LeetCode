/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const tribon = [0, 1, 1];

    if (n <= 2) {
        return tribon[n];
    }

    for (let i = 3; i <= n; i++) {
        tribon[i] = tribon[i - 1] + tribon[i - 2] + tribon[i - 3];
    }

    return tribon[n];
};
