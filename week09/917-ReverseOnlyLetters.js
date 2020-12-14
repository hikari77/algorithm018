/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let low = 'abcdefghijklmnopqrstuvwxyz';
    let alpha = low + low.toUpperCase();
    let dic = new Set(alpha.split(''));
    let s = S.split('');
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        while (left < right && !dic.has(s[left]))
            left++;
        while (left < right && !dic.has(s[right]))
            right--;
        if (left < right)
            [s[left], s[right]] = [s[right], s[left]];
        left++, right--;
    }

    return s.join('');
};