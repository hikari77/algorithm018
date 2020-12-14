/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        while (left < right && s[left] === s[right])
            left++, right--;
        // 当遇到不一样时 试着跳过左边字符或者右边字符 
        return isValid(s, left + 1, right) || isValid(s, left, right - 1);
    }
    return true;
};

const isValid = (s, left, right) => {
    while (left < right){
        if (s[left] !== s[right]) return false;
        left++, right--;
    }
    return true
}