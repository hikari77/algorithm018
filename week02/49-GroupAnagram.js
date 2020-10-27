/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dic = new Map(), res = [];
    
    for(let word of strs) {
        let key = trans(word)
        dic.get(key) ? dic.get(key).push(word) : dic.set(key, [word])
    }
    
    for(let [_, value] of dic) {
        res.push(value)
    }
    
    return res;
};

const trans = (str) => str.split('').sort().join('');