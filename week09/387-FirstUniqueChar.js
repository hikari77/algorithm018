/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 0) return -1;
    let dic = Object.create(null);

    for (let c of s)
        dic[c] === undefined ? dic[c] = 1 : dic[c] += 1;
    
    for (let i in s) 
        if (dic[s[i]] === 1) return i;
    
    return -1;
};