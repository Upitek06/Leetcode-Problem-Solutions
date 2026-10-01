function findLHS(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let j = 0, maximum = 0;
    for (let i = 0; i < nums.length; ++i) {
        while (nums[i] - nums[j] > 1) ++j;
        if (nums[i] - nums[j] == 1) {
            maximum = Math.max(maximum, i - j + 1);
        }
    }
    return maximum;
};