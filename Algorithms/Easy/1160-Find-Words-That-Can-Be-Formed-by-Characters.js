/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

    let res = 0, i = 0, j = 0;
    let Alpha = new Array(26).fill(0);

    for (let i = 0; i < chars.length; i ++) {
        Alpha[chars.charCodeAt(i) - 97] += 1;
    }

    for (i = 0; i < words.length; i ++) {
        let alphaClone = Alpha.slice();

        for (j = 0; j < words[i].length; j ++) {
            let index = words[i].charCodeAt(j) - 97;
            if (alphaClone[index] === 0) {
                break;
            }
            alphaClone[index] -= 1;
        }

        if (j === words[i].length) {
            res += j;
        }
    }

    return res;
};