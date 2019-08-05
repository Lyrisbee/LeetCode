/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let
        count = 0,
        l = '',
        r = '';
    
    for (let i = 0; i < text.length; i++) {
        l += text.charAt(i);
        r =  text.charAt(text.length - i - 1) + r;
        
        if (l === r) {
            l = '';
            r = '';
            count += 1;
        }
    }
    
    return count;
};