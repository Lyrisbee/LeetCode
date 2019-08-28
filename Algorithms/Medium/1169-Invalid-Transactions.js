/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {

    let res = []
    let record = [];
    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i].split(',');
        if (trans[2] > 1000) {
            res.push(transactions[i]);
            continue;
        }
        
        for (let j = 0; j < transactions.length; j ++) {
            let trans2 = transactions[j].split(',');
            if (i !== j && trans[0] === trans2[0] && trans[3] !== trans2[3] && Math.abs(trans[1] - trans2[1]) <= 60) {
                res.push(transactions[i]);
                break;
            }
        }
    }

    
    return res;
};