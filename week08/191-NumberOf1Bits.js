/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let temp = new Uint32Array(1), count = 0;
    temp[0] = n;
    
    while(temp[0] > 0){
        count++;
        temp[0] = temp[0] & (temp[0] - 1);
    }
    return count;
};


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function(n) {
    let res = 0;
    
    while (n !== 0) {
        res += (n & 1);
        n = n >>> 1;
    }
    return res;
};