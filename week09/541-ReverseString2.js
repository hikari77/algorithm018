/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('');
    let i = 0, n = arr.length;
    
    while (i < n) {
        reverse(arr, i, Math.min(i + k - 1, n - 1));
        i += 2 * k;
    }
    return arr.join('');
};


const reverse = (arr, start, end) => {
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++, end--;
    }
}


// 第一版 笨方法，看答案优化了2点，（坑 k-1 下标）
// 1. 优化了k项跳过判断
// 2. 抽出了 reverse函数的重复使用
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr2 = function(s, k) {
    let arr = s.split('');
    let i = 0, n = arr.length;
    
    while (i < n) {

        if ((i / k) % 2 === 1) {
            i += k;
            continue;
        }
        
        if (i + 2 * k - 1 > n && i + k - 1 <= n - 1 ) {
            reverse(arr, i, i + k - 1);
            break;
        } else if (i + k - 1 >= n - 1) {
            reverse(arr, i, n - 1);
        } else {
            reverse(arr, i, i + k - 1);
        }
        i += k;
    }
    return arr.join('');
};


const reverse = (arr, start, end) => {
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++, end--;
    }
}