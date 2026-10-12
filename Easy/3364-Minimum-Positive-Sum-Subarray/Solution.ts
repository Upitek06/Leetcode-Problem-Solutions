function minimumSumSubarray(nums: number[], l: number, r: number): number {
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
            count -= nums[low]
            count += nums[high]

            low++;
            high++;

            if (count > 0) {
                minVal = Math.min(minVal, count);
            }
        }
    }
    if (minVal == Number.MAX_SAFE_INTEGER) return -1;
    return minVal;
};