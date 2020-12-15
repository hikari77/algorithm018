/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    if (s.length === 0) return res;
    
    let m = s.length, n = p.length;
    let S = new Array(26).fill(0), P = new Array(26).fill(0);
    
    for (let i = 0; i < n; ++i) 
        S[s.charCodeAt(i) - 97]++, P[p.charCodeAt(i) - 97]++;
    
    for (let i = 0; i < m; ++i) {
        if(isAna(S, P)) 
            res.push(i);
        
        S[s.charCodeAt(i) - 97]--;
        S[s.charCodeAt(i + n) - 97]++;
    }
    
    return res;
};

const isAna = (S, P) => {
    for (let i = 0; i < P.length; ++i) 
        if (S[i] !== P[i]) return false;
    return true;
}