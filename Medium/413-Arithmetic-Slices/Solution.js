/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let n = nums.length, val = 0, valPrev = 0, res = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i - 1] - nums[i - 2] == nums[i] - nums[i - 1]) val = valPrev + 1;
        res += val;
        valPrev = val;
        val = 0;
    }
    return res;
};/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let n = nums.length, val = 0, valPrev = 0, res = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i - 1] - nums[i - 2] == nums[i] - nums[i - 1]) val = valPrev + 1;
        res += val;
        valPrev = val;
        val = 0;
    }
    return res;
};