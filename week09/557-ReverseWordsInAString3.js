/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    
    for (let i = 0; i < arr.length; ++i)
        arr[i] = reverse(arr[i])
    
    return arr.join(' ');
};

const reverse = (s) => {
    let strs = s.split('');
    let l = 0, r = strs.length - 1;

    while (l < r) {
        [strs[l], strs[r]] = [strs[r], strs[l]];
        l++, r--;
    }
    return strs.join('');
}