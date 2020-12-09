/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // quick sort
    quick(nums, 0, nums.length - 1);
    return nums;
};

const quick = (nums, start, end) => {
    if (start >= end) return;
    
    let left = start, right = end;
    let pivot = nums[start + ((end - start) >> 1)];
    
    while (left <= right) {
        while (left <= right && nums[left] < pivot)
            left++;
        while (left <= right && nums[right] > pivot)
            right--;
        if (left <= right)
            [nums[left++], nums[right--]] = [nums[right], nums[left]];
    }
    
    quick(nums, start, right)
    quick(nums, left, end)
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray2 = function(nums) {
    // selection sort
    for (let i = 0; i < nums.length - 1; ++i) {
        let min = i;
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[min]) min = j;
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }
    return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray3 = function(nums) {
    // bubble sort
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = 0; j < nums.length - 1 - i; ++j) {
            if (nums[j] > nums[j + 1])
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        }
    }
    return nums;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray4 = function(nums) {
    // insertion sort
    for (let i = 1; i < nums.length; ++i) {
        let temp = nums[i];
        let hole = i;
        while (hole > 0 && nums[hole - 1] > temp){
            nums[hole] = nums[hole - 1];
            hole--;
        }
        nums[hole] = temp;
    }
    return nums;
};