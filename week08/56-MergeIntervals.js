/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 1;
    while (i < intervals.length) {
        let left = intervals[i - 1][0];
        let right = Math.max(intervals[i - 1][1], intervals[i][1]);
        
        if (intervals[i - 1][1] < intervals[i][0]) {
            i++;
            continue;
        }
        intervals[i - 1] = [left, right];
        intervals.splice(i, 1);
    }
    return intervals;
};