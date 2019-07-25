/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    const reverse = parseInt(('' + Math.abs(x)).split('').reverse().join('')) * Math.sign(x);

    return (reverse >= -2147483648 && reverse <= 2147483647) ? reverse : 0;
};