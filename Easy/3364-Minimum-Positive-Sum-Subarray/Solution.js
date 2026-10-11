/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let i = l; i < r + 1; ++i) {
        let count = 0;
        for (let j = 0; j < i; ++j) {
            count += nums[j];
        }
        if (count > 0) {
            minVal = Math.min(minVal, count);
        }

        let low = 0, high = i;
        while (high < nums.length) {
            count -= nums[low];
            count += nums[high];

            low++;
            high++;

            if (count > 0) {
                minVal = Math.min(minVal, count);
            }
        }
    }
    if (minVal == Number.MAX_SAFE_INTEGER) {
        return -1
    }
    return minVal;
};