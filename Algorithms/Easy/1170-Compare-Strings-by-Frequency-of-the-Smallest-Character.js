/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    let wordF = new Array(words.length).fill(0);
    let res = new Array(queries.length).fill(0);
    for (let i = 0; i < words.length; i++) {
        let alpha = new Array(26).fill(0);
        for (let j = 0; j < words[i].length; j++) {
            alpha[words[i].charCodeAt(j) - 97] ++;
        }
        for (let j = 0; j < alpha.length; j ++) {
            if (alpha[j] !== 0) {
                wordF[i] = alpha[j];
                break;
            }
        }
    }

    let maxQ = 0;
    for (let i = 0; i < queries.length; i++) {
        let alpha = new Array(26).fill(0);
        for (let j = 0; j < queries[i].length; j++) {
            alpha[queries[i].charCodeAt(j) - 97] ++;
        }

        for (let j = 0; j < alpha.length; j ++) {
            if (alpha[j] !== 0) {
                maxQ = alpha[j];
                break;
            }
        }

        for (let j = 0; j < wordF.length; j++) {
            if (wordF[j] > maxQ) {
                res[i] ++;
            }
        }
    }
    
    return res;
    
};