/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length === 0 && t.length === 0) return true;
    
    for (let i = 0; i < s.length; ++i)
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
    
    return true;
};