/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let j = 0, i = 0;
    for (i; i < nums.length; ++i) {
        if (nums[i] == 0) --k;
        if (k < 0) {
            if (nums[j] == 0) ++k;
            ++j;
        }
    }
    return i - j;
};