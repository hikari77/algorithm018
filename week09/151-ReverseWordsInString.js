/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strs = s.split(' ').filter(s => s !== '');
    let left = 0, right = strs.length - 1;
    
    while (left < right) {
        [strs[left], strs[right]] = [strs[right], strs[left]];
        left++, right--;
    }
    return strs.join(' ');
};