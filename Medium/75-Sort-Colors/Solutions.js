/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let l = 0, m = 0, r = nums.length - 1;
    while (m <= r) {
        if (nums[m] === 0) {
            [nums[m], nums[l]] = [nums[l], nums[m]];
            l++;
            m++;
        } else if (nums[m] === 1) {
            m++;
        } else if (nums[m] === 2) {
            [nums[m], nums[r]] = [nums[r], nums[m]];
            r--;
        }
    }
};